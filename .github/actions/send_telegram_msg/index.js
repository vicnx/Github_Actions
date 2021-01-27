const core = require("@actions/core");
const github = require("@actions/github") 
const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput("token_bot");
const bot = new TelegramBot(token, {polling: false});
var chatId=core.getInput("id_chat");
const name = core.getInput("name");
const msg = github.event.head_commit.message

try {
  bot.sendMessage(chatId,msg);
} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("message", "Mensaje enviado con exito");