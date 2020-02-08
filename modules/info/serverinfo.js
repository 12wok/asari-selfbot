
const { RichEmbed } = require('discord.js')
const moment = require('moment')
module.exports.run = async (client, msg, args, config) => {

    let embed = new RichEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Owner', client.users.get(msg.guild.ownerID).tag,true)
    .addField('Region', msg.guild.region,true)
    .addField('Channel Categories', msg.guild.channels.filter(c => c.type === "category").size,true)
    .addField('Text Channels', msg.guild.channels.filter(c => c.type === "text").size,true)
    .addField('Voice Channels', msg.guild.channels.filter(c => c.type === "voice").size,true)
    .addField('Members', msg.guild.members.size,true)
    .addField('Humans', msg.guild.members.filter(mem => !mem.user.bot).size,true)
    .addField('Bots', msg.guild.members.filter(mem => mem.user.bot).size,true)
    .addField('Roles', msg.guild.roles.size,true)
    .setFooter(`ID: ${msg.guild.id} | Server Created: ${msg.guild.createdAt}`)
    .addField('Custom Emojis', msg.guild.emojis.size > 100 ? msg.guild.emojis.size : msg.guild.emojis.map(e => e.toString()).join(" "),true)
    .setColor("RANDOM")

    msg.channel.send(embed)


}



module.exports.help = {
    name:"serverinfo",
    guildOnly: true,
    usage:"*serverinfo",
    example:"*serverinfo",
    group: "info",
    desc:"Shows the server information in an embed."
} 