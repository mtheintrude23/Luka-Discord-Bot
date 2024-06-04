const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'cuddle',
  description: 'Âu yếm ai đó!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const cuddleGif = await anime.cuddle();

    const embed = new EmbedBuilder()
      .setColor('#ff9900')
      .setDescription(`${sender} âu yếm ${targetUser || 'với không khí'}! 🤗`)
      .setImage(cuddleGif);

    message.reply({ embeds: [embed] });
  },
};
