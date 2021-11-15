const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('CouCou')
            .setDescription(`Bienvenue \nVoici l'id de la personne: ${message.author.id}`)
            .setURL('https://aytrox.wixsite.com/aytrox')
            .setColor('RANDOM')
            .addField('Intro', 'Bonjours c\'est moi', true )
            .addField('Intro 2', 'LOL', true )
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL(), 'https://aytrox.wixsite.com/aytrox')
            .setImage(message.author.displayAvatarURL())
            .setThumbnail('https://i.imgur.com/5q6IXIf.png')
            .setFooter(`Cordialement AYTROX • ${message.author.id}`, 'https://cdn.discordapp.com/attachments/768371331737059350/861295167168315392/discord-logo-logodownload-download-logotipos-1.png')
            .setTimestamp())
            console.log(`  ${message.author.tag} à utilisé la commande: ${config.prefix}test-embed\n`)
    },
    name: 'test-embed',
    guildOnly: true,
    help: {
        description: 'Un test de embed',
        syntax: '<message> [EMBED]'
    }
}