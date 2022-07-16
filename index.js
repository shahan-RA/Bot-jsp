const {Intents} = require("discord.js");

const config = require('./config.json');

const Discord = require("discord.js");

const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

client.on('ready', () => {
    client.channels.fetch('802229980867199026').then((channel) => {
        channel.messages.fetch('996336354348777552').then((message) => {
            message.reactions.cache.forEach(async(reaction) => {
                // Liste des utilisateurs ayant répondus avec l'icone '✋'
                if (reaction._emoji.name === '✋') {
                    reaction.users.fetch().then(function (users) {
                        console.log(users);
                    });
                }
            });
        })
    })
});

client.login(config.token);
