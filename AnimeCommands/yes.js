const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'yes',
  description: 'Thể hiện sự đồng ý hoặc phê duyệt!',
  async execute(message, args) {
    const sender = message.author;
    const yesGif = await anime.yes();

    const embed = new EmbedBuilder()
      .setColor('#00cc66')
      .setDescription(`${sender} nói có! 👍`)
      .setImage(yesGif);

    message.reply({ embeds: [embed] });
  },
};
