import express from "express"
import Discord from "discord.js"
import CONFIG from "../config"
var router = express.Router()

// Initialize Discord Bot
var bot = new Discord.Client();
const d0xChannelId = "529986548079394819" // Right ID: [TODO] | Test ID: "529986548079394819"
const finlabsChannelId = "529986518459088897" // Right ID: "509760275885588500"| Test ID: "529986518459088897"

bot.on('message', msg => {
  // Only continues when it's either the d0x or finlabs channel
  if (msg.channel.id === d0xChannelId || msg.channel.id === finlabsChannelId) {
    // Too prevent infinate loop between the bot and itself
    if (`${msg.author.username + "#" + msg.author.discriminator}` !== bot.user.tag) {
      if (msg.channel.id === d0xChannelId) {
        bot.channels.get(finlabsChannelId).send(msg.author.username + "#" + msg.author.discriminator + ": " + msg.content);
      } else if (msg.channel.id === finlabsChannelId) {
        bot.channels.get(d0xChannelId).send(msg.author.username + "#" + msg.author.discriminator + ": " + msg.content);
      }
    }
  }
});

const init = async () => {
  await bot.login(CONFIG.TOKEN)
}

init();
module.exports = router
