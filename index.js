const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Prêt!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Une erreur s'est produite.");
    }
})

/* Droit D'auteur */
client.on("ready", () => {
    const statuses = [
        () => 'Made By AYTROX#1418 | TikTok: @aytrox | Twitter: @AYTROX2_0 | Github: AYTROX_OFFICIEL | V2.0.0',
        () => `${client.guilds.cache.size} serveurs`,
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
    
})


client.login(token);
client.commands = new Discord.Collection()
