const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'thinking',
  description: 'Cho thấy rằng bạn\'đang suy nghĩ lại!',
  async execute(message, args) {
    const sender = message.author;
    const thinkingGif = await anime.thinking();

    const embed = new EmbedBuilder()
      .setColor('#99ccff')
      .setDescription(`${sender} đang nghĩ... 🤔`)
      .setImage(thinkingGif);

    message.reply({ embeds: [embed] });
  },
};
