
const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
module.exports.run = async (client, msg, args, config) => {

    let embed = new RichEmbed()
    .setImage(`https://cataas.com/cat?${Math.floor(Math.random() * 1000) + 1}`)
    .setColor("RANDOM")
    msg.channel.send(embed)
}


module.exports.help = {
    name:"cat",
    group: "fun",
    usage:"*cat",
    example:"*cat",
    desc:"Sends a random cat."
} 