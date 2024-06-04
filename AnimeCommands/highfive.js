const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'highfive',
  description: 'Tặng ai đó một cái đập tay!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const highfiveGif = await anime.highfive();

    const embed = new EmbedBuilder()
      .setColor('#00ccff')
      .setDescription(`${sender} cho ${targetUser || 'không khí'} đập tay! 🖐`)
      .setImage(highfiveGif);

    message.reply({ embeds: [embed] });
  },
};
