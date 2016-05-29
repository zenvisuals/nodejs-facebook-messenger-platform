const Utils = require('../utils/Utils');
const regExp = /Hello/g;

const self = {
	processPayload: (sender, payload) => {
		console.log(payload);
	},
	sendReply: (sender) => {
		Utils.sendTextMessage(sender, 'hello');
	}
}

module.exports = self;