const Discord = require('discord.js')
module.exports = (client) => {
    client.afk = new Discord.Collection()
    client.copycat = new Discord.Collection()
    client.snipe = new Discord.Collection()
    client.emotemode = new Discord.Collection()
    console.log(`Selfbot for ${client.user.tag} has been started.`)
 
    
}
