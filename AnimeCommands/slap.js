const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'slap',
  description: 'Cho ai đó một cái tát!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const slapGif = await anime.slap();

    const embed = new EmbedBuilder()
      .setColor('#ff3300')
      .setDescription(`${sender} cho ${targetUser || 'không khí'} một cái tát! 😠`)
      .setImage(slapGif);

    message.reply({ embeds: [embed] });
  },
};
