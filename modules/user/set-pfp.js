
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    try {

  
    if (!/\.(jpe?g|png|gif)$/i.test(args[0])) {
        return msg.reply('that was not a valid URL.')
    }

    client.user.setAvatar(args[0])
    await msg.react("✅")
    return;


} catch(err) {
    msg.channel.send('Error, make sure you are not trying to upload a gif image when you do not have nitro.')
}

}



module.exports.help = {
    name:"set-pfp",
    usage:"*set-pfp <url>",
    example:"*set-pfp https://somerandomimage.png",
    ownerOnly: true,
    group: "user",
    desc:"Sets your profile picture to the image you provided."
} 