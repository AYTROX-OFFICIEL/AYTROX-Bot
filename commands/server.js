module.exports = {
    name: 'server',
    description: 'Server Informations.',
    execute(message) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
  };