const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'nervous',
  description: 'Cho thấy bạn đang lo lắng!',
  async execute(message, args) {
    const sender = message.author;
    const nervousGif = await anime.nervous();

    const embed = new EmbedBuilder()
      .setColor('#cc9900')
      .setDescription(`${sender} đang cảm thấy lo lắng... 😰`)
      .setImage(nervousGif);

    message.reply({ embeds: [embed] });
  },
};
