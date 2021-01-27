const core = require("@actions/core");
const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput("token_bot");
const bot = new TelegramBot(token, {polling: false});
var chatId=core.getInput("id_chat");
const name = core.getInput("name");

try {
  bot.sendMessage(chatId,"Workflow ejecutado correctamente tras el último commit. Saludos "+name);
} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("message", "Mensaje enviado con exito");