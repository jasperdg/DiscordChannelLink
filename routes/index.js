import express from "express"
import Discord from "discord.js"
import CONFIG from "../config"
var router = express.Router()

// Initialize Discord Bot
var bot = new Discord.Client();
const d0xChannelId = "529986548079394819" // Test ID
const finlabsChannelId = "509760275885588500" // Right ID

bot.on('ready', function (evt) {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (`${msg.author.username + "#" + msg.author.discriminator}` !== bot.user.tag) {
    if (msg.channel.id === d0xChannelId) {
      bot.channels.get(finlabsChannelId).send(msg.author.username + "#" + msg.author.discriminator + ": " + msg.content);
    } else if (msg.channel.id === finlabsChannelId) {
      bot.channels.get(d0xChannelId).send(msg.author.username + "#" + msg.author.discriminator + ": " + msg.content);
    }
  }
});

const init = async () => {
  await bot.login(CONFIG.TOKEN)
}

init();
module.exports = router
