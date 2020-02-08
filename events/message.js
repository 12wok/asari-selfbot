const config = require('../util/config.json')

module.exports = (client, msg) => {



    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    


    if(client.emotemode.get(client.user.id) && msg.author.id === client.user.id) {
        msg.react(client.emotemode.get(client.user.id))
    }

    if(client.afk.get(client.user.id) && msg.channel.type === "dm" && msg.author.id !== client.user.id) {
        msg.channel.send(client.afk.get(client.user.id))
    }
    
    if (msg.author.id === client.copycat.get(client.user.id)) {
        msg.channel.send(msg.content)
    } 

    if (msg.content.indexOf(config.prefix) !== 0) return;
    if (!client.commands.get(cmd)) return;
    if (!config.allowOtherPeople && msg.author.id !== client.user.id) return;
    if (client.commands.get(cmd).help.ownerOnly && msg.author.id !== client.user.id) return;
    client.commands.get(cmd).run(client, msg, args, config);

}
