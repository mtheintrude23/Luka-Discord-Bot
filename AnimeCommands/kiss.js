const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'kiss',
  description: 'Gửi một nụ hôn!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const kissGif = await anime.kiss();

    const embed = new EmbedBuilder()
      .setColor('#ff3399')
      .setDescription(`${sender} là gửi một nụ hôn tới ${targetUser || 'không khí'}! 😘`)
      .setImage(kissGif);

    message.reply({ embeds: [embed] });
  },
};
