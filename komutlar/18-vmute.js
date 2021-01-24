const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");
const jdb = new qdb.table("cezalar");
const kdb = new qdb.table("kullanici");
const ms = require("ms");
const moment = require("moment");

exports.run = async (client, message, args) => {
  //-------------------------------------------------------------------------------\\

  if (
    !["797807935307644939"].some(role =>
      message.member.roles.cache.get(role)
    ) &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(
            `${message.author} Komutu kullanmak için yetkin bulunmamakta.`
          )
          .setColor("#ffa700")
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));

  const mutelog = message.guild.channels.cache.find(
    c => c.id === "797807566456619038"
  ); //mute log

  //-------------------------------------------------------------------------------\\

  let aylartoplam = {
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
    "12": "Aralık"
  };
  let aylar = aylartoplam;

  let kullanici =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!kullanici)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(`${message.author}, bir kullanıcı etiketle.`)
          .setColor("#ffa700")
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
  if (message.member.roles.highest.position <= kullanici.roles.highest.position)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(
            `${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`
          )
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("#ffa700")
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
  if (kullanici.id === message.author.id)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(`${message.author}, Kendini sunucudan mute atılamaz.`)
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("#ffa700")
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
  if (kullanici.id === client.user.id)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(
            `${message.author}, Bir botu sunucudan mute atılamaz.`
          )
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("#ffa700")
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
  if (kullanici.id === message.guild.OwnerID)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(
            `${message.author}, Sunucu sahibini sunucudan mute atılamaz.`
          )
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("#ffa700")
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
  let muteler = jdb.get(`voicemute`) || [];
  let sure = args[1];
  let sebep = args.splice(2).join(" ");
  if (!sure)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(`${message.author}, Bir zaman belirtmelisin.`)
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("#ffa700")
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
  if (!sebep)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(`${message.author}, Bir sebep belirtmelisin.`)
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("#ffa700")
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
  if (kullanici.voice.channel) kullanici.voice.setMute(true).catch();
  let zaman1 = args[1]
    .replace("sn", "s")
    .replace("dk", "m")
    .replace("sa", "h")
    .replace("gün", "d");
  //
  var vakit = zaman1
    .replace("m", " dakika")
    .replace("s", " saniye")
    .replace("h", " saat")
    .replace("d", " d");
  db.set(`seslide2.${kullanici.user.id}.${message.guild.id}`, vakit);
  if (!muteler.some(j => j.id == kullanici.id)) {
    kdb.add(`kullanici.${message.author.id}.mute`, 1);
    moment.locale("tr");
    kdb.push(`kullanici.${kullanici.id}.sicil`, {
      Yetkili: message.author.id,
      Sebep: sebep,
      Ceza: "VMUTE",
      Süre: sure,
      Tarih: `${moment(Date.now())
        .add(10, "hours")
        .format("HH:mm:ss DD MMMM YYYY")}`
    });

    message.channel.send(
      new MessageEmbed()
        .setAuthor(
          message.member.displayName,
          message.author.avatarURL({ dynamic: true })
        )
        .setColor("#ffa700")
        .setTimestamp()
        .setDescription(
          `${message.author} **tarafından** ${kullanici} \`${sebep}\` **sebebiyle seste susturuldu.**`
        )
    );
    message.react("✅");
    mutelog.send(
      new MessageEmbed()
        .setAuthor(
          message.member.displayName,
          message.author.avatarURL({ dynamic: true })
        )
        .setColor("#ffa700")
        .setTimestamp()
        .setDescription(
`<a:maria_tac_2:798886588326871080> **Sesli Odalarda Susturuldu **\n
<a:maria_tac_2:798886588326871080> **Yetkili:** (\`${  message.author.id }\`)\n
<a:maria_tac_2:798886588326871080> **Kullanıcı:** (\`${kullanici.user.id  }\`)\n
<a:maria_tac_2:798886588326871080> **Süre:** \`${zaman1}\`\n
<a:maria_tac_2:798886588326871080> **Sebep**: \`${sebep}\` \n
<a:maria_tac_2:798886588326871080> **Tarih:** \`${moment(
            Date.now()
          )
            .add(10, "hours")
            .format("HH:mm:ss DD MMMM YYYY")}\``
        )
    );
    setTimeout(async function() {
      kullanici.voice.setMute(false);
      mutelog.send(
        new MessageEmbed()
          .setColor("#ffa700")
 .setTitle('MAЯIΛ ARMY')
          .setDescription(
            `<a:maria_tac_2:798886588326871080> **Sesli Odalarda Susuturlması Kalktı**\n
<a:brave_1:794924431788474408> **Yetkili:** (\`${message.author.id}\`)\n
<a:maria_tac_2:798886588326871080> **Kullanıcı:** (\`${ kullanici.user.id }\`)\n
<a:maria_tac_2:798886588326871080> **Süre:** \`${zaman1}\`\n
<a:maria_tac_2:798886588326871080> **Sebep**: \`${sebep}\` \n
<a:maria_tac_2:798886588326871080> **Tarih:** \`${moment(
              Date.now()
            )
              .add(10, "hours")
              .format("HH:mm:ss DD MMMM YYYY")}\``
          )
      );
    }, ms(zaman1));
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vmute", "seslisustur"],
  permLevel: 0
};

exports.help = {
  name: "vmute"
};
