const db = require("../mongodb");
module.exports = {
  name: 'roll',
  aliases: ['dice', 'rolldice'],
  description: 'Đổ xúc xắc',
  execute(message, args) {
    const sides = parseInt(args[0]) || 6; // Mặc định là 6 mặt nếu không cung cấp đối số
    const result = Math.floor(Math.random() * sides) + 1;

    // Reply to the user with the dice roll result
    message.reply(`Bạn đã lăn một ${result} trên một ${sides}-xúc xắc hai mặt!`);
  },
};
