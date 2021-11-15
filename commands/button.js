const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    run: (message, args, client) => {
        const Button1 = new MessageButton()
        .setStyle('url')
        .setLabel('Github')
        .setURL('https://github.com/AYTROX-OFFICIEL')

        const Button2 = new MessageButton()
        .setStyle('url')
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/c/AYTROX')

        const urlboutton = new MessageButton()
        .setStyle('url')
        .setLabel('website')
        .setURL('https://examples.com')

        const Button = new MessageActionRow()
        .addComponents([Button1, Button2, urlboutton])

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor('AYTROX')
        .setTitle('Link')
        .setDescription('test')
        .setColor('#FF7037')
        , {
            components: Button
        })
    },
    name: 'button',
    guildOnly: true,
    help: {
        description: 'null',
        syntax: 'null'
    }
}