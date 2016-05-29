const Utils = require('../utils/Utils');
const regExp = /Hello/g;

const self = {
	processMessage: (sender, message) => {
		if (regExp.test(message)) self.sendReply(sender);
	},
	sendReply: (sender) => {
		Utils.sendTextMessage(sender, 'hello');
	}
}

module.exports = self;