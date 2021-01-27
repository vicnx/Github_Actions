const core = require("@actions/core");
const github = require("@actions/github") 
const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput("token_bot");
const bot = new TelegramBot(token, {polling: false});
var chatId=core.getInput("id_chat");
const name = core.getInput("name");
const commit = JSON.stringify(github.context.payload,undefined,2);

try {
  bot.sendMessage(chatId,`${name} commit realizado con exito:\nAutor: ${commit.heat_commit.author.username}\nEmail: ${commit.heat_commit.author.email}\nUrl:${commit.heat_commit.url}\nMsg:${commit.heat_commit.message}`);

  // bot.sendMessage(chatId,name+" Commit realizado con exito, aquí tienes la info del commit: \nAuthor");
} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("message", "Mensaje enviado con exito");