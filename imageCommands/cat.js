const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'cat',
  aliases: ['randomcat', 'meow'],
  description: 'Hiển thị hình ảnh con mèo ngẫu nhiên',
  async execute(message, args) {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const imageUrl = response.data[0]?.url;

      if (!imageUrl) {
        throw new Error('Không tìm nạp được hình ảnh con mèo.');
      }

      const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setTitle('Hình ảnh mèo ngẫu nhiên 😺')
        .setImage(imageUrl);

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Lỗi tìm nạp hình ảnh con mèo:', error);
      message.reply('Rất tiếc, hiện tại tôi không thể tải hình ảnh con mèo.');
    }
  },
};

