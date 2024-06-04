const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'wink',
  description: 'Nháy mắt với ai đó!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const winkGif = await anime.wink();

    const embed = new EmbedBuilder()
      .setColor('#ffcc33')
      .setDescription(`${sender} nháy mắt với ${targetUser || 'không khí'} 😉`)
      .setImage(winkGif);

    message.reply({ embeds: [embed] });
  },
};
