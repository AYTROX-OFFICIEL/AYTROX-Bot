const Discord = require('discord.js'),
      config = require('../config.json')

//pour plus d'infos aller sur: https://github.com/AYTROX-OFFICIEL/AYTROX-Bot/blob/main/README.md

module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Cette commande **n\'existe pas**.'), console.log('  Utilisé la bonne commande!!!')
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('Liste des commandes Pour la version du bot => 2.1.2.1')
            .setDescription(`${client.commands.filter(command => command.help).map(command => `\`${config.prefix}${command.name}\``).join(' ')}\n\nPour plus d'informations sur une commande, tapez:\n\`${config.prefix}help [nom de la commande]\``)
            .setFooter(`${message.author.tag} • Aide par l\'équipe AYTROX`, message.author.displayAvatarURL())
            .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/attachments/861295999989055521/888804809887596564/help-logo-bot.png')
            .setColor('#FA2E00'))
            console.log(`\n  ${message.author.tag} à utilisé la commande: ${config.prefix}help\n`)
        }
    },
    name: 'help',
    help: {
        description: 'Cette commande permet d\'avoir de l\'aide.',
        syntax: '[nom de la commande]'
    }
}