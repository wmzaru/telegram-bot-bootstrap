
 // dependencies
 var _ = require('lomath');

 // API as superclass that bot inherits methods from
 var API = require(__dirname + '/API.js')

 // The bot object prototype
 // bot extends and inherits methods of API
 var bot = function(token, webhookUrl) {
      API.apply(this, arguments);
     // set webhook on construction: override the old webhook
     this.setWebhook(webhookUrl || '');

 }

 // set prototype to API
 bot.prototype = API.prototype;
 // set constructor back to bot
 bot.prototype.constructor = bot;



 bot.prototype.handle = function(req, res) {
     // the Telegram Update object. Useful shits
     var Update = req.body,
         // the telegram Message object
         Message = Update.message,
         // the user who sent it
         user_id = Message.from.id,
         // id of the chat(room)
         chat_id = Message.chat.id;


     this.sendMessage(chat_id, "you said: " + Message.text);

 }

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
