const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://discord.com/invite/mVUMG7tdRa";
      const githubLink = "https://github.com/MinDz204";
      const replitlink = "https://replit.com/@khanhtq2205";
      const youtubeLink = "https://www.youtube.com/@YuongzMin";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1242855743955275919/1247580140699914270/standard.gif?ex=66608b0c&is=665f398c&hm=5fd8d349cd2eef361ad95e1ffff38c3df85ac1201fa233a4d9f2d707601ebed8&', 
              url: 'https://discord.com/invite/mVUMG7tdRa'
          })
            .setDescription(`➡️ **Tham gia máy chủ Discord của chúng tôi để được hỗ trợ và cập nhật:**\n- Discord - ${supportServerLink}\n\n➡️ **Theo dõi chúng tôi tại:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1242855743955275919/1247580140699914270/standard.gif?ex=66608b0c&is=665f398c&hm=5fd8d349cd2eef361ad95e1ffff38c3df85ac1201fa233a4d9f2d707601ebed8&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
