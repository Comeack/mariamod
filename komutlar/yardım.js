const Discord = require("discord.js"); //
const client = new Discord.Client(); //

exports.run = async (client, message, args) => {
  const exampleEmbed = new Discord.MessageEmbed()
  .setColor("#ffa700'")
	.setTitle('**MAЯIΛ MODERATİON**')
	.setThumbnail("https://cdn.glitch.com/51684c1d-6aab-4682-88a4-713444a3b882%2Fezgif.com-gif-maker%20(1).gif?v=1610185436623")//şuralara gif
  .setDescription('**.afk** : `AFK Olursunuz` \n**.ban** : `Birini Banlarsınız.` \n**.banbilgi** : `Bir Kişinin Neden Banlandığını Öğrenirsiniz.` \n**.çek** : `Birini Yanınınza Çekersiniz.` \n**.git** : `Birinin Yanına Gidersiniz.` \n**.jail** : `Birine Jail Atarsınız.` \n**.kes** : `Birinin Bağlantısını Kesersiniz.`\n**.mute** : `Birine Mute Atarsınız.` \n**.say** : `Sunucu Hakkında Bilgi Alırsınız.` \n**.sicil-sıfırıla** : `Birini Sicilini Sıfırlarsınız.` \n**.sicil** : `Birinin Siciline Bakarsınız.` \n**.snipe** : `Son Silinen Mesaja Bakarsınız.` \n**.sil** : `Bir Kanaldaki Mesajları Silersiniz.` \n**.unban** : `Birinin Banını Açarsınız.` \n**.unjail** : `Birinin Jailini Açarsınız.` \n**.unmute** : `Birinin Mutesini Açarsınız.` \n**.unvmute** : `Biriin Sesli Mutesini Açarsınız.` \n**.vmute** : `Birine Sesli Mute Atarsınız.`')
	.setFooter('MAЯIΛ #TAGALIM');
  
message.channel.send(exampleEmbed);
  //kolay gelsin reis :d
  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım", "help"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
