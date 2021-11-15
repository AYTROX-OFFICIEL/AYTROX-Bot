const Discord = require('discord.js')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send('Veuillez indiquer un nombre de messages à supprimer.')
        if (count < 1 || count > 99) return message.channel.send('Le nombre de message doit être compris entre 1 et 99.')
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        console.log(`\n  Le bot à supprimé *${size -1}* messages\n\n  N'oublie pas d'aller voir mon discord profite tu la lancer: https://discord.gg/UyjwFrTSRs\n`)
        message.author.send(`j'ai supprimé \`${size - 1}\` message(s) ! ✅`).then(sent => sent.delete({timeout: 2e4}))
        console.log(`  ${message.author.tag} à utilisé la commande: ${config.prefix}clear\n\n`)
    },
    name: 'clear',
    guildOnly: true,
    help: {
        description: 'Permet de supprimer des messages du **serveur**.',
        syntax: '<suprime> [combiens de messages]?'
    }
}