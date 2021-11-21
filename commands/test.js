const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    run: (message, args, client) => {
        const Button6 = new MessageButton()
        .setStyle('green')
        .setEmoji('✅')
        .setLabel('OUI')
        .setID('ButtonEmbed6')

        const Button7 = new MessageButton()
        .setStyle('red')
        .setEmoji('🗑')
        .setLabel('NON')
        .setID('ButtonEmbed7')

        const Button8 = new MessageButton()
        .setStyle('blurple')
        .setLabel(`Demandé par ${message.author.tag}`)
        .setID('ButtonEmbed8')
        .setDisabled()

        const ButtonEmbed = new MessageActionRow()
        .addComponents([Button6, Button7, Button8])

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`AYTROX 2021 V2.1.2.2`, 'https://i.imgur.com/FHKcKMR.gif', 'https://aytrox.wixsite.com/website')
        .setColor('RANDOM')
        .setDescription('Bonjours, Voici la commande: **"test"**.\nCette commande est une commande test pour la Version du bot **N°2.1.2.3**')
        .addField('OUI', 'sur les bouttons en bas du message.\nvous pouvez appuyez dessus pour supprimer ou le laisser.\n(oui = laisser), (non = supprimé)', true)
        .addField('NON', 'supprimé le message', true)
        .setFooter(`Commande: test Demandé par ${message.author.username}`)
        , {
            components: ButtonEmbed
        })
    },
    name: 'test',
    guildOnly: true,
    help: {
        description: 'Test pour la mise à jour V2.1.2.3 qui va bientôt sortir',
        syntax: 'test pour la Version 2.1.2.3'
    }
}