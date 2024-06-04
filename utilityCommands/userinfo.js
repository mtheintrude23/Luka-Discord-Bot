const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    aliases: ['user', 'uinfo'],
    description: 'Nhận thông tin của bản thân',
    execute(message, args) {
        // Check if a user was mentioned in the command, or use the message author as the default user
        const user = message.mentions.users.first() || message.author;

        // Create an embed object
        const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setAuthor({
        name: 'Thông Tin Bản Thân!',
        iconURL: 'https://cdn.discordapp.com/attachments/1140841446228897932/1144684108174348318/giphy_1.gif', 
        url: 'https://discord.com/invite/mVUMG7tdRa'
    })
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setDescription(`**Tên**:  ${user.username}\n**Discriminator**:  ${user.discriminator}\n**ID**:  ${user.id}\n**Đã Tham Gia Vào Discord**:  ${user.createdAt.toUTCString()}`)
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
