const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send('๐๐คฃ๐๐๐คฃ๐')
        console.log(`\n  ${message.author.tag} ร  utilisรฉ la commande: ${config.prefix}lol\n`)
    },
    name: 'lol',
    guildOnly: true,
    help: {
        description: 'tu te marre ;)',
        syntax: 'none'
    }
}