const Discord = require('discord.js');
const version = 'V2.1.2.2';
const { MessageButton, MessageActionRow } = require('discord-buttons');

// Télécharger la dernière version de **AYTROX-Bot**
module.exports = {
    run: (message, args, client) => {
        const Button9 = new MessageButton()
        .setStyle('url')
        .setLabel('Dernier Fichier (Télécharger)')
        .setURL('https://github.com/AYTROX-OFFICIEL/AYTROX-Bot/releases/latest/download/AYTROX-Bot.rar')

        const Button10 = new MessageButton()
        .setStyle('url')
        .setLabel('Dernière version')
        .setURL('https://github.com/AYTROX-OFFICIEL/AYTROX-Bot/releases/latest')

        const ButtonDownload = new MessageActionRow()
        .addComponents([Button9, Button10])


        message.channel.send(new Discord.MessageEmbed()
        .setAuthor('AYTROX', 'https://i.imgur.com/l9dC9hg.gif', 'https://aytrox.wixsite.com/website')
        .setColor('#0F6ADF')
        .setDescription(`Bonjours **${message.author.username}**\nVoici la version que vous avez: **[AYTROX-Bot${version}](https://github.com/AYTROX-OFFICIEL/AYTROX-Bot/releases/tag/V2.1.2.2)**`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Cordialement L'équipe AYTROX`, 'https://media.discordapp.net/attachments/861295999989055521/888769356199264306/discord-logo-logodownload-download-logotipos-1.png')
        , {
            components: ButtonDownload
        })
    },
    name: 'latest',
    guildOnly: true,
    help: {
        description: 'lien pour télécharger la dernière version de **AYTROX-Bot**',
        syntax: 'lien download'
    }
}
// https://github.com/AYTROX-OFFICIEL/AYTROX-Bot/releases/latest/download/AYTROX-Bot.rar