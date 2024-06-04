const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'pat',
  description: 'Vỗ nhẹ người dùng bằng ảnh gif vỗ nhẹ!',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first() || sender;
    const patGif = await anime.pat();

    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setDescription(`${sender} vỗ nhẹ ${targetUser}!`)
      .setImage(patGif);

    message.reply({ embeds: [embed] });
  },
};
