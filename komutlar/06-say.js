const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["798257034180165642"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('BLACK').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "793057418099425340"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:798885680964304907>`,
'1': `<a:1_:798885681115562014>`,
'2': `<a:2_:798885819536375838>`,
'3': `<a:3_:798885820101951508>`,
'4': `<a:4_:798885818981941278>`,                       
'5': `<a:5_:798885819544502313>`,
'6': `<a:6_:798885820731490364>`,
'7': `<a:7_:798885818134560831>`,
'8': `<a:8_:798885820882616340>`,
'9': `<a:9_:798885820538683442>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:798885680964304907>`,
'1': `<a:1_:798885681115562014>`,
'2': `<a:2_:798885819536375838>`,
'3': `<a:3_:798885820101951508>`,
'4': `<a:4_:798885818981941278>`,                       
'5': `<a:5_:798885819544502313>`,
'6': `<a:6_:798885820731490364>`,
'7': `<a:7_:798885818134560831>`,
'8': `<a:8_:798885820882616340>`,
'9': `<a:9_:798885820538683442>`}[d];})}
var taglılar = 0;

let tag = "र";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:798885680964304907>`,
'1': `<a:1_:798885681115562014>`,
'2': `<a:2_:798885819536375838>`,
'3': `<a:3_:798885820101951508>`,
'4': `<a:4_:798885818981941278>`,                       
'5': `<a:5_:798885819544502313>`,
'6': `<a:6_:798885820731490364>`,
'7': `<a:7_:798885818134560831>`,
'8': `<a:8_:798885820882616340>`,
'9': `<a:9_:798885820538683442>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:798885680964304907>`,
'1': `<a:1_:798885681115562014>`,
'2': `<a:2_:798885819536375838>`,
'3': `<a:3_:798885820101951508>`,
'4': `<a:4_:798885818981941278>`,                       
'5': `<a:5_:798885819544502313>`,
'6': `<a:6_:798885820731490364>`,
'7': `<a:7_:798885818134560831>`,
'8': `<a:8_:798885820882616340>`,
'9': `<a:9_:798885820538683442>`}[d];})}
  
  
  
var booster = message.guild.roles.cache.get("798158116469997600").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:798885680964304907>`,
'1': `<a:1_:798885681115562014>`,
'2': `<a:2_:798885819536375838>`,
'3': `<a:3_:798885820101951508>`,
'4': `<a:4_:798885818981941278>`,                       
'5': `<a:5_:798885819544502313>`,
'6': `<a:6_:798885820731490364>`,
'7': `<a:7_:798885818134560831>`,
'8': `<a:8_:798885820882616340>`,
'9': `<a:9_:798885820538683442>`}[d];})}

  
const embed1 = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setThumbnail('https://cdn.glitch.com/51684c1d-6aab-4682-88a4-713444a3b882%2Fezgif.com-gif-maker%20(1).gif?v=1610185436623')
 .setDescription(`

<a:maria_tac:798886561516355605> **Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.**   
<a:maria_tac:798886561516355605> **Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.**   
<a:maria_tac:798886561516355605> **Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.** 
<a:maria_tac:798886561516355605> **Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**  
<a:maria_tac:798886561516355605> **Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**
`)
.setFooter('MAЯIΛ #TAGALIM')
msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}