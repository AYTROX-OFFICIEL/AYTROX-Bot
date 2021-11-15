const Discord = require('discord.js'),
    moment = require('moment')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL(), 'https://aytrox.wixsite.com/website')
        .setColor('#1E1E1E')
        .addField('Membre', member, true)
        .addField('Tag', `**${member.user.tag}**`, true)
        .addField('Date de Création du compte', moment(member.user.createdAt).format('[Le] **DD/MM/YYYY** [à] HH:mm:ss'), true)
        .addField('Date d\'arrivée sur le serveur', moment(member.joinedAt).format('[Le] **DD/MM/YYYY** [à] HH:mm:ss'), true)
        .addField('Date de début de boost', member.premiumSince ? moment(member.premiumSince).format('[Le] **DD/MM/YYYY** [à] HH:mm:ss') : '**__Ne boost pas__**', true)
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter(`ID: ${member.id} • Pseudo: ${member.displayName}`, 'https://cdn.discordapp.com/attachments/861295999989055521/888769356199264306/discord-logo-logodownload-download-logotipos-1.png')
        .setTimestamp())
        console.log(`\n  ${message.author.tag} à utilisé la commande: ${config.prefix}user-info\n`)
    },
    name: 'user-info',
    guildOnly: true,
    help: {
        description: 'Les infos **du membre** que vous mentionnez',
        syntax: 'commande + mentions= qui vous shouaiter avoir des infos ?'
    }
}