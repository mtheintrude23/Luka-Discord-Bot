const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'stare',
  description: 'Nhìn chằm chằm vào ai đó!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const stareGif = await anime.stare();

    const embed = new EmbedBuilder()
      .setColor('#ff9900')
      .setDescription(`${sender} đang nhìn chằm chằm vào ${targetUser || 'khoảng trống'}... 👀`)
      .setImage(stareGif);

    message.reply({ embeds: [embed] });
  },
};
