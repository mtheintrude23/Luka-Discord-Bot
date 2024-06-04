const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'dance',
  description: 'Nhảy như không có ai\'đang xem!',
  async execute(message, args) {
    const sender = message.author;
    const danceGif = await anime.dance();

    const embed = new EmbedBuilder()
      .setColor('#ffcc00')
      .setDescription(`${sender} đang nhảy múa! 💃🕺`)
      .setImage(danceGif);

    message.reply({ embeds: [embed] });
  },
};
