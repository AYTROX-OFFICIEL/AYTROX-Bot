const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send('😂🤣😆😂🤣😆')
        console.log(`\n  ${message.author.tag} à utilisé la commande: ${config.prefix}lol\n`)
    },
    name: 'lol',
    guildOnly: true,
    help: {
        description: 'tu te marre ;)',
        syntax: 'none'
    }
}