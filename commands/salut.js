const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send('Salut')
        console.log(`\n  ${message.author.tag} à utilisé la commande: ${config.prefix}salut\n`)
    },
    name: 'salut',
    guildOnly: true,
    help: {
        description: 'Permet au bot de te saluer.',
        syntax: '<salut> [réponse]'
    }
}