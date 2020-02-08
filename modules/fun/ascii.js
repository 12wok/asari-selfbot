
const { RichEmbed } = require('discord.js')
const ascii = require('ascii-art')
module.exports.run = async (client, msg, args, config) => {

    let text = args.join(" ")

    ascii.font(text, 'Doom', function(rendered) {
        console.log(rendered)
        rendered = rendered.trimRight()
        if (rendered.length > 2000) return msg.reply('That message was too long')
        msg.channel.send(rendered, {
            code: 'md',
        })
    })

   

}

module.exports.help = {
    name:"ascii",
    usage:"*ascii <message>",
    example:"*ascii cex is cool",
    group: "fun",
    desc:"Converts your message into ascii."
} 