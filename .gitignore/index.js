const Discord = require('discord.js');
const fs = require('fs');
const prefix = "!";
const client = new Discord.Client();
config = require('./config.json');
client.commands = new Discord.Collection();
const Client = new Discord.Client({
    fetchAllMembers: true,
    ws: {
        intents: new Discord.Intents(Discord.Intents.ALL)
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'say')) { // CHANGE ONLY IF EXPERT //
      if (message.author.bot) return;
      const SayMessage = message.content.slice(6).trim(); // CONNECTED WITH prefix + "say" //
      message.channel.send(SayMessage)
      message.channel.send(" " + ` `)
  }
});

client.on('ready', function () {
    console.log("Je suis connecté !")
    client.user.setStatus('dnd')
    client.user.setActivity("discord.io/DISCORDERIE", {type: 'WATCHING'});
  })


client.on('guildMemberAdd', member => {
    member.roles.add("846036070436700160")
  })

client.on('message', message => {
    if(message.content.includes("Quoi")) message.reply("Feur")
    if(message.content.includes("Quoi")) message.react("<:coiffeur:846448109885456384>")
    if(message.content.includes("Feur")) message.react("<:coiffeur:846448109885456384>")
})








































































































































client.login('ODQ2MDcyMTE3MjQ5OTY2MTEy.YKqMEA.PEnzbvJLV77WPHpYMJHxDD9eRo0')
