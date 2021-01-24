const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const moment = require('moment')
exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\  
  
if(!["798257013620473876"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

const banlog = message.guild.channels.cache.find(c => c.id === '798257173339701290')//Ban Log 

//-------------------------------------------------------------------------------\\


  
          let tumaylar = {
        "01": "Ocak",  
        "02": "Şubat", 
        "03": "Mart",  
        "04": "Nisan",  
        "05": "Mayıs", 
        "06": "Haziran", 
        "07": "Temmuz",
        "08": "Ağustos", 
        "09": "Eylül", 
        "10": "Ekim", 
        "11": "Kasım", 
        "12": "Aralık", 
        }
  let aylar = tumaylar;
  
let kisi = await client.users.fetch(args[0]);
if(!kisi) return message.channel.send(new MessageEmbed().setDescription(`${message.author} **bir ID belirtmelisin.**`).setColor('#ffa700').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

message.guild.members.unban(kisi.id)
message.channel.send(new MessageEmbed().setDescription(`${message.author} **tarafından** ${kisi} a**dlı kullanıcının sunucu yasağı kaldırıldı.**`).setColor('#ffa700').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic:true }))).then(x => x.delete({ timeout: 5000}))
  
message.react('✅')
banlog.send(new MessageEmbed() .setTitle('MAЯIΛ ARMY') .setThumbnail('https://cdn.glitch.com/51684c1d-6aab-4682-88a4-713444a3b882%2Fezgif.com-gif-maker%20(1).gif?v=1610185436623')  .setColor('#ffa700').setTimestamp().setDescription(`<a:maria_tac_2:798886588326871080> **Sunucudan Yasağı Kaldırıldı!**\n<a:maria_tac_2:798886588326871080> **Kaldıran Yetkili:** ${message.author} (\`${message.author.id}\`) \n<a:maria_tac_2:798886588326871080> **Banı Kaldırılan Üye:** ${kisi} (\`${kisi.id}\`) \n<a:maria_tac_2:798886588326871080> **Ban Kaldırma Tarihi:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\` `));

}
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unban", "yasak-kaldır"],
  permLvl: 0,
}

  exports.help = {
  name: 'unban'
}

