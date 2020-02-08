const isReachable = require('is-reachable');
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(!args[0]) return msg.reply('You forgot a website to check!')
    let reachable = await isReachable(args[0])

    if(reachable) {
        return msg.channel.send(new RichEmbed().setDescription(`${args[0]} is online.`).setColor("RANDOM"))
    } 
    return msg.channel.send(new RichEmbed().setDescription(`${args[0]} is offline.`).setColor("RANDOM"))
    
  
}


module.exports.help = {
    name:"check-host",
    usage:"*check-host <url>",
    group: "search",
    desc: "Checks if the website is online or offline and returns the answer in an embed.",
    example:"*check-host https://google.com",
}