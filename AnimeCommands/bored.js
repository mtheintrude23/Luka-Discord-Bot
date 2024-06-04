const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'bored',
  description: 'Cho thấy rằng bạn\'chán quá!',
  async execute(message, args) {
    const sender = message.author;
    const boredGif = await anime.bored();

    const embed = new EmbedBuilder()
      .setColor('#996633')
      .setDescription(`${sender} đang cảm thấy chán... 😴`)
      .setImage(boredGif);

    message.reply({ embeds: [embed] });
  },
};
