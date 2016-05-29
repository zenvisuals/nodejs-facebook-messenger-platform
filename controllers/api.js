"use strict"; 
const express = require('express');
const api = express.Router();
const fs = require('fs');
const FBMP_VERIFYTOKEN = process.env.FBMP_VERIFYTOKEN;
let plugins = {};

const attachPlugins = (type) => {
	plugins[type] = [];
	fs.readdirSync(__dirname + `/../${type}`).forEach((name) => {
		if (name.substr(-3) == ".js") {
			plugins[type].push(require(`./../${type}/${name}`));
		}
	})
}

attachPlugins("textbacks");
attachPlugins("postbacks");


api.get('/webhook/', (req, res) => {
	if (req.query['hub.verify_token'] === FBMP_VERIFYTOKEN) {
		res.send(req.query['hub.challenge']);
	}
	res.send('Error, wrong validation token');
})

api.post('/webhook/', (req, res) => {
	let messaging_events = req.body.entry[0].messaging;
	for (let i = 0; i < messaging_events.length; i++) {
		let event = req.body.entry[0].messaging[i];
		let sender = event.sender.id;
		if (event.message && event.message.text) {
			let text = event.message.text;
			plugins["textbacks"].forEach((textback) => {
				textback.processMessage(sender, text);
			})
		} else if (event.postback && event.postback.payload) {
			let payload = event.postback.payload;
			plugins["postbacks"].forEach((postback) => {
				postback.processPayload(sender, payload);
			})
		}
	}

	res.sendStatus(200);
})

module.exports = api;

