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
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Tôi ở đây để trợ giúp!',
        iconURL: 'https://cdn.discordapp.com/attachments/1242855743955275919/1247580163110080522/pack.png?ex=66608b11&is=665f3991&hm=c6df0e2218dd05563de00845c6ce512f47dcbbe675055de25032a7e16b689cf6&', 
        url: 'https://discord.com/invite/UCQKfTUVup'
    })
     
      .setDescription(`__**THỐNG KÊ :**__\n\n> **📊 Bot trong server:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [YuongzMin](https://www.youtube.com/@YuongzMin)**\n\n__**COMMANDS :**__ `)
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
          value: '`<prefix>animecommand để biết thêm thông tin`',
          inline: true,
        },
     
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1242855743955275919/1247580140699914270/standard.gif?ex=66608b0c&is=665f398c&hm=5fd8d349cd2eef361ad95e1ffff38c3df85ac1201fa233a4d9f2d707601ebed8&`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/@YuongzMin')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.com/invite/UCQKfTUVup')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://github.com/MinDz204/YuongzBoiSiTinh')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
