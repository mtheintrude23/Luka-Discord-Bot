const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'scream',
  description: 'Hét lên vì sợ hãi hoặc phấn khích!',
  async execute(message, args) {
    const sender = message.author;
    const screamGif = await anime.scream();

    const embed = new EmbedBuilder()
      .setColor('#ff3300')
      .setDescription(`${sender} đang la hét... 😱`)
      .setImage(screamGif);

    message.reply({ embeds: [embed] });
  },
};
