const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'bully',
  description: 'Tinh nghịch bắt nạt ai đó!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const bullyGif = await anime.bully();

    const embed = new EmbedBuilder()
      .setColor('#9933ff')
      .setDescription(`${sender} những kẻ bắt nạt tinh nghịch ${targetUser || 'không khí'}! 😆`)
      .setImage(bullyGif);

    message.reply({ embeds: [embed] });
  },
};
