const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick members khỏi máy chủ',
    execute(message, args) {
        // Check if the user has the necessary permissions to use the command
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply('❌ Bạn không có quyền sử dụng lệnh này.');
        }

        // Check if a user was mentioned in the command
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('❌ Bạn cần tag tên người đó vào để kick.');
        }

        // Kick the mentioned user
        const member = message.guild.members.cache.get(user.id);
        member.kick();

        // Create an embed object
        const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('User Kicked ✅')
            .setDescription(`▶️ ${user.tag} đã bị kick khỏi máy chủ bởi ${message.author.tag}.`)
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/
