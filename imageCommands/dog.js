const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'dog',
  aliases: ['randomdog', 'woof'],
  description: 'Hiển thị hình ảnh con chó ngẫu nhiên',
  async execute(message, args) {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      const imageUrl = response.data.message;

      if (!imageUrl) {
        throw new Error('Không tìm nạp được hình ảnh con chó.');
      }

      const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setTitle('Hình ảnh con chó ngẫu nhiên 🐶')
        .setImage(imageUrl);

      // Reply to the user who executed the command
      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Lỗi tìm nạp hình ảnh con chó:', error);
      // Reply to the user who executed the command
      message.reply('Rất tiếc, hiện tại tôi không thể tìm hình ảnh con chó.');
    }
  },
};

