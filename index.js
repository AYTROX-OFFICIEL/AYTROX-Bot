const Discord = require('discord.js');
const { TIMEOUT } = require('dns');
const { MessageButton } = require('discord-buttons');
const client = new Discord.Client();
moment =  require('moment')
config = require('./config.json')
fs = require('fs')
require('discord-buttons')(client);

client.on("ready", () => {
    console.log(`\n  Le bot est prêts => ${client.user.tag} !\n\n`)
});

// script pour diriger vers le dossier 'commands' + lire tout les fichier qui finissent par '.js'
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

/*client.on('clickButton', async (button) => {
    if (button.id === 'test1') {
        button.reply.send('Salut')
    }
    else if (button.id === 'test2') {
        button.reply.send('lol')
    }
})*/

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

//droit d'auteur (Copyright AYTROX 2021)
client.on("ready", () => {
    const statuses = [
        () => 'Made By AYTROX#1418 | TikTok: @aytrox | Twitter: @AYTROX_OFFICIEL | Github: AYTROX-OFFICIEL | V2.1.2.0',
        () => 'utilise => AYTROX-Bot V2.1.2.0',
        () => 'Serveur Discord: https://dsc.gg/AYTROX',
        () => 'Projet AYTROX Bot: https://github.com/AYTROX-OFFICIEL/AYTROX-Bot'
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 2e4)
    
})

// Token du bot dans le fichier 'config.json'
client.login(config.token)
client.commands = new Discord.Collection()