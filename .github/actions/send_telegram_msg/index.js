const core = require("@actions/core");
const github = require("@actions/github") 
const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput("token_bot");
const bot = new TelegramBot(token, {polling: false});
var chatId=core.getInput("id_chat");
const name = core.getInput("name");
const commit = github.context.payload;

try {
  bot.sendMessage(chatId,`${name}, se ha realizado un commit con exito:\n\nAutor: ${commit.head_commit.author.username}\nEmail: ${commit.head_commit.author.email}\nMsg:${commit.head_commit.message}\nUrl:${commit.head_commit.url}`);

} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("message", "Mensaje enviado con exito");