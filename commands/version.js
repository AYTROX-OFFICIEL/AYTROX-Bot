const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor('AYTROX-Bot V2.1.2.2', 'https://i.imgur.com/FHKcKMR.gif', 'https://github.com/AYTROX-OFFICIEL/AYTROX-Bot/releases/tag/V2.1.2.2')
        .setFooter(`Version Demandé par: ${message.author.tag}`))
        console.log(`  ${message.author.tag} à utilisé la commande: ${config.prefix}version\n`)
    },
    name: 'version',
    guildOnly: true,
    help: {
        description: 'Version 2.1.2.2',
        syntax: 'version'
    }
}