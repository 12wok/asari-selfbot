module.exports.run = async (client, msg, args, config) => {

    await msg.channel.send('Closing selfbot.')
    await client.destroy()
}


module.exports.help = {
    name:"close-bot",
    usage:"*close-bot",
    group: "config",
    example:"*close-bot",
    ownerOnly: true,
    desc:"Closes the selfbot.",
} 