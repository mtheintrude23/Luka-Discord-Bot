const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");

module.exports = {
	name: 'avatar',
    aliases: ['profilepic', 'pfp', 'av'],
	description: 'gửi hình đại diện của người dùng',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 });
		
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(`Avatar của ${user.username}`)
            .setImage(avatar);

		
		
		
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
