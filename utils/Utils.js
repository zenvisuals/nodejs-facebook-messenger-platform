"use strict";

const request = require('request');
const token = process.env.FBMP_TOKEN;
var util = require('util');

class Utils {
	static sendTextMessage(sender, text) {
		let messageData = {
			text: text
		}

		request({
			url: 'https://graph.facebook.com/v2.6/me/messages',
			qs: {access_token: token},
			method: 'POST',
			json: {
				recipient: {id: sender},
				message: messageData
			}
		}, (error, response, body) => {

			if (error) {
				console.log(`Error sending message: ${error}`);
			} else {
				console.log(util.inspect(response.body.error, {showHidden: false, depth: null}));
			}
		})
	}
}

module.exports = Utils;