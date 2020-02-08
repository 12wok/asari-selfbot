module.exports.run = (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.reply('You need the MANAGE_ROLES permission to use this.')
    
    if(!msg.guild.roles.find(r => r.name === "Muted")) return msg.reply('I could not find a muted role')

    let user = msg.mentions.users.first()

    if(!user) return msg.reply('You forgot a user to mute!')

    msg.guild.member(user).addRole(msg.guild.roles.find(r => r.name === "Muted").id)

    msg.channel.send(`Muted ${user.toString()}`)
}


module.exports.help = {
    name:"mute",
    usage:"*mute",
    desc: "Assigns mentioned user the muted role.",
    example:"*mute",
    group: "moderation",
}