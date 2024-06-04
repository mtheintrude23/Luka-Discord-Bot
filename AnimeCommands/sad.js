const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');

module.exports = {
  name: 'sad',
  description: 'Thể hiện nỗi buồn bằng ảnh GIF!',
  async execute(message, args) {
    const sender = message.author;
    const sadGif = await anime.sad();

    const embed = new EmbedBuilder()
      .setColor('#3366ff')
      .setDescription(`${sender} cảm thấy buồn... 😢`)
      .setImage(sadGif);

    message.reply({ embeds: [embed] });
  },
};
