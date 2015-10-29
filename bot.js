
var _ = require('lomath');

// API as superclass that bot inherits methods from
var API = require(__dirname + '/API.js')

// // The bot object prototype
// // bot extends and inherits methods of API
var bot = function(token, webhookUrl) {
     API.apply(this, arguments);
     // set webhook on construction: override the old webhook
     this.setWebhook(webhookUrl || '');

 }

var bot = require('telegram-bot-bootstrap');
var fs = require('fs');

var Alice = new bot('154392636:AAFAopfSVBIZJTyTdLnzAe0x_UvNbRdO_JE');

Alice.getUpdates().then(console.log)
// → you'll see an update message. Look for your user_id in "message.from.id"

// Once you get your id to message yourself, you may:
Alice.sendMessage(19884279, "Hello there")
// → you'll receive a message from Alice.
.then(console.log)
// → optional, will log the successful message sent over HTTP
// // set prototype to API
bot.prototype = API.prototype;
// // set constructor back to bot
bot.prototype.constructor = bot;

bot.prototype.handle = function(req, res) {
//     // the Telegram Update object. Useful shits
     var Update = req.body,
//         // the telegram Message object
Message = Update.message,
//         // the user who sent it
user_id = Message.from.id,
//         // id of the chat(room)
chat_id = Message.chat.id;

export the bot class
module.exports = bot;

sample keyboard
 var kb = {
     keyboard: [
         ['one', 'two'],
         ['three'],
         ['four']
     ],
     one_time_keyboard: true
 }
 
