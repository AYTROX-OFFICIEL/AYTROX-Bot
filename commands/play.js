// Command dispo pour la veriosn: 2.1.2.3

/*const Discord = require('discord.js')
const ytSearch = require('yt-search');
const ytdl = require('ytdl-core');

const queue = new Map();

module.exports = {
    async run: (message, args, cmd, client, Discord) => {
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Connecté vous a un salon vocal pour utilisé cette commande');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Vous n\'avez pas la permission d\'utliser cette commande');
        if (!permissions.has('SPEAK')) return message.channel.send('Vous n\'avez pas la permission d\'utliser cette commande');

        const server_queue = queue.get(message.guild.id);

        if (cmd === 'play'){
            if (!args.length) return message.channel.send('Vous n\'avez pas proposé de liens.');
            let song = {};

            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {
                const video_finder = async (query) =>{
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video){
                    song = { title: video.title, url: video.url }
                }else {
                    message.channel.send('Erreur dans le chargement de la vidéo.');
                }
            }
        }
    },
    name: 'play',
    guildOnly: true,
    help: {
        description: 'permet de lire une musique ou vidéo sur **Youtube**',
        syntax: 'play music'
    }
}*/