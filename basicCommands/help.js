const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Hiển thị danh sách các lệnh có sẵn',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#00BFFF')
      .setAuthor({
        name: 'Tôi ở đây để trợ giúp!',
        iconURL: 'https://media.discordapp.net/attachments/1235388718165266435/1247893817076613130/tsukino_luca_by_rosettaxxx_dec80vc-fullview.png?ex=6661af2e&is=66605dae&hm=4d1bddf992a5fe8ac9d9df0735fd310dc61a896c5695434dfa617a70436c3788&=&format=webp&quality=lossless', 
        url: 'https://note1s.net/note/ljok2Wpr0wvw'
    })
     
      .setDescription(`__**THỐNG KÊ :**__\n\n> **📊 Bot trong server:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By Luka Developers**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
       
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`',
          inline: true,
        },
      
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `roll`',
          inline: true,
        },
      
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
      
        {
          name: '▶️  Anime',
          value: '`<prefix> animecommand để biết thêm thông tin`',
          inline: true,
        },
     
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://media.discordapp.net/attachments/1235388718165266435/1247893244809969778/latest.png?ex=6661aea6&is=66605d26&hm=2fe248ccb64ba036bfc15e01bce03ff4b8b52052148cb3a61f7c7b8931057243&=&format=webp&quality=lossless&width=550&height=309`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://note1s.net/note/A4eAwQaUKl6F')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://note1s.net/note/A4eAwQaUKl6F')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://note1s.net/note/A4eAwQaUKl6F')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
