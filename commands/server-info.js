const commandName = 'server-info'
const Discord = require('discord.js')
    moment = require('moment')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Infos du serveur: ${message.guild.name}`)
        .setURL('https://aytrox.wixsite.com/website')
        .addField('Nom', `**__${message.guild.name}__**`, true)
        .addField('Propriétaire', message.guild.owner, true)
        .addField('Région', `**${message.guild.region}**`, true)
        .addField('Membres', `__${message.guild.memberCount}__ Humains\n${message.guild.members.cache.filter(member => !member.user.bot).size} Bot(s)`, true)
        .addField('Rôles', message.guild.roles.cache.size, true)
        .addField('Salons', `__${message.guild.channels.cache.size}__ salons total\n__${message.guild.channels.cache.filter(channel => channel.type === 'text').size}__ salons textuels\n__${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}__ salons vocaux\n__${message.guild.channels.cache.filter(channel => channel.type === 'category').size}__ catégories`, true)
        .addField('Emojis', `__${message.guild.emojis.cache.size}__ émojis\n__${message.guild.emojis.cache.filter(emoji => !emoji.animated).size}__ émojis non annimé\n__${message.guild.emojis.cache.filter(emoji => emoji.animated).size}__ émojis annimé`, true)
        .addField('Date de création', moment(message.guild.createdAt).format('[Le] **DD/MM/YYYY** [à] HH:mm:ss'), true)
        .addField('Nitro boost', `Tier: ${message.guild.premiumTier}\nNombre de Boosts: ${message.guild.premiumSubscriptionCount}`, true)
        .setFooter(`ID du serveur: ${message.guild.id} • Demandé par ${message.author.tag}`)
        .setThumbnail(message.guild.iconURL())
        .setImage(message.guild.bannerURL())
        .setTimestamp())
        console.log(`  ${message.author.tag} à utilisé la commande: ${config.prefix}${commandName}\n`)
    },
    name: 'server-info',
    guildOnly: true,
    help: {
        description: 'toutes les **Infos du serveur**',
        syntax: 'les infos du server'
    }
}