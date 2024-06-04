const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'animecommands',
  description: 'Hiển thị danh sách các lệnh có sẵn liên quan đến anime!',
  execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Lệnh Anime')
      .setDescription(`__**✅ Danh sách tương tác có sẵn**__\n\n▶️ __**Phần 1 :**__\n  blush, cuddle, dance, slap, bonk, bully, hug, confused, kiss, pat, happy, smile.\n\n▶️ __**Phần 2 :**__\n yes, highfive, wink, wave, thinking, sad, cry, stare, bored, scream, nervous, kill.\n`)
      
      .setImage(`https://cdn.discordapp.com/attachments/1140841446228897932/1142126954775068762/pxfuel.jpg`);
    message.reply({ embeds: [embed] });
  },
};
