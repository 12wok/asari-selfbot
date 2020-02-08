
const { RichEmbed } = require('discord.js')
const iplookup = require('ipapi.co')
module.exports.run = async (client, msg, args, config) => {


    if(!args[0]) return msg.channel.send('you forgot an IP!')

 
    iplookup.location(function(data) { 
        if(data.error || data.reserved) return msg.reply('Could not find info about that ip address.')
       
      let embed = new RichEmbed()
      .setTitle(data.ip)
      .addField(`City`, data.city,true)
      .addField(`Region`, data.region,true)
      .addField(`Region Code`, data.region_code,true)
      .addField('Country', data.country_name,true)
      .addField(`Capital`, data.country_capital,true)
      .addField(`Europe`, data.in_eu === true ? "yes" : "no",true)
      .addField(`Postal Code`, data.postal,true)
      .addField(`Latitude`, data.latitude,true)
      .addField(`Longitude`, data.longitude,true)
      .addField(`Orginaziation`, data.org,true)
      
      msg.channel.send(embed)
    }, args[0])

    
  
}


module.exports.help = {
    name:"iplookup",
    usage:"*iplookup <ip>",
    group: "search",
    desc: "*iplookup <ip>",
    example:"*iplookup 127.0.0.1",
}