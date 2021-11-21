const Discord = require('discord.js'),
  config = require('../config.json')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor('AYTROX 2021 Projet: AYTROX-Bot V2.1.2.2 2019-2021', 'https://i.imgur.com/FHKcKMR.gif', 'https://github.com/AYTROX-OFFICIEL/AYTROX-Bot')
        .addField('Copyright', 'Copyright © **AYTROX 2021**', false)
        .addField('Site', 'Site **AYTROX**: **https://aytrox.wixsite.com/website**', false)
        .addField('Github', 'https://github.com/AYTROX-OFFICIEL', false)
        .addField('Page AYTROX-Bot', 'https://github.com/AYTROX-OFFICIEL/AYTROX-Bot', false)
        .addField('Site by AYTROX', 'https://aytrox-officiel.github.io', false)
        .addField('Discord AYTROX', 'https://discord.gg/UyjwFrTSRs', false)
        .addField('AYTROX V4', 'AYTROX V4 est un serveur privé fortnite qui permet d\'avoir tout les skins Fortnite !\nlien -> https://github.com/AYTROX-OFFICIEL/AYTROX-V4', false)
        .addField('Twitter', 'https://twitter.com/AYTROX_OFFICIEL', false)
        .addField('YouTube', 'https://www.youtube.com/c/AYTROX', false)
        .addField('TikTok', 'https://www.tiktok.com/@aytrox', false)
        .setFooter(`'Copyright' Demandé par => ${message.author.username}`)
        .setTimestamp())
        console.log(`\n  ${message.author.tag} à utilisé la commande: ${config.prefix}copyright\n`)
    },
    name: 'copyright',
    guildOnly: true,
    help: {
        description: 'Copyright AYTROX 2021',
        syntax: 'Copyright'
    }
}