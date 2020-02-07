
const { RichEmbed } = require('discord.js')
let interval;
const Discord = require('discord.js')
module.exports.run = async (asd, msg, args, config) => {

    
    if (args[0].length > 200) msg.reply('Token may not exceed 200 characters.')
   

}


module.exports.help = {
    name:"login",
    usage:"*login <message>",
    example:"*dm cex is cool",
    ownerOnly: true,
    group: "user",
    desc:"Sends a DM to everyone in the server. This feature will get you banned, so using this on an alt account is recommended."
} 