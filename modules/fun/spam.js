const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {


    let amount = args[0]
    let message = args.join(" ")

    if(!amount || message) return msg.reply('Error, you used it wrongly. type *help spam')
    for(let i = 0; i < parseInt(amount); i++) {
        await msg.channel.send(message.slice(amount.length))
    }

    msg.channel.send('Done')
    
}
   
   
   module.exports.help = {
       name:"spam",
       usage:"*spam <amount> <message>",
       desc:"Sends a message x amount of times.",
       example:"*spam <message> <amount>",
       group: "fun",
       ownerOnly: true,
   }