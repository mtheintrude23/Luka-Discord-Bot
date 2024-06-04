const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'joke',
  description: 'Kể một câu chuyện cười ngẫu nhiên',
  async execute(message, args) {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      const { setup, punchline } = response.data;

      const embed = new EmbedBuilder()
        .setColor('#FFC0CB')
        .setTitle('Trò đùa ngẫu nhiên')
        .setDescription(`${setup}\n\n${punchline}`);

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Lỗi khi tìm nạp trò đùa:', error);
      message.reply('Xin lỗi, lúc này tôi không thể kể chuyện cười được.');
    }
  },
};
