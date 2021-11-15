const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    run: (message, args, client) => {
        const Button1 = new MessageButton()
        .setStyle('url')
        .setLabel('AYTROX V4')
        .setURL('https://github.com/AYTROX-OFFICIEL/AYTROX-V4')

        const Button2 = new MessageButton()
        .setStyle('url')
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/c/AYTROX')

        const Button3 = new MessageButton()
        .setStyle('url')
        .setLabel('Instagram')
        .setURL('https://www.instagram.com/follow.back_officiel')

        const Button4 = new MessageButton()
        .setStyle('url')
        .setLabel('website')
        .setURL('https://aytrox.wixsite.com/website')

        const Button5 = new MessageButton()
        .setStyle('blurple')
        .setLabel(`Demandé par ${message.author.tag}`)
        .setID('Buttonuser')
        .setDisabled()

        const Button = new MessageActionRow()
        .addComponents([Button1, Button2, Button3, Button4, Button5])

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor('AYTROX', 'https://i.imgur.com/FHKcKMR.gif', 'https://aytrox.wixsite.com/website')
        .setTitle('Link')
        .setDescription('Tout mes liens. pour accéder à tout mes liens appuyez sur les bouttons en bas du message')
        .setColor('#FF7037')
        , {
            components: Button
        })
        console.log(`\n  ${message.author.tag} à utilisé la commande: ${config.prefix}liens\n`)
    },
    name: 'liens',
    guildOnly: true,
    help: {
        description: 'tout les liens de mes réseau sociaux',
        syntax: 'liens'
    }
}