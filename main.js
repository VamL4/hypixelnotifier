require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client()
const util = require('minecraft-server-util');
const id = "324261688062771200";
const id2 = "413791604369784832";

client.login(process.env.token);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
    if (msg.content == "!run") {
        msg.author.send('running...')
        msg.author.send('Checker.js ... [ON]')
        const interval = setInterval(() => {
            util.status('play.hypixel.net')
                .then((response) => {
                    console.log(response.onlinePlayers);
                    if (response.onlinePlayers >= 0) {
                        // 324261688062771200, 413791604369784832
                        const Alimsg = `**يا عرص هايبكسل فتح!!  \n 
                        ${response.onlinePlayers} **`;

                        let MEmb = new Discord.MessageEmbed()
                            .setColor('#FF5733')
                            .setTitle('**رسالة مهمة**')
                            .setDescription(Alimsg)
                            .setTimestamp()
                            .setAuthor(msg.author.username, msg.author.displayAvatarURL({ dynamic: true }));

                        client.users.cache.get(id2).send(MEmb);
                        client.users.cache.get(id).send(MEmb);
                    }
                })
        }, 5000)
    }

    else if (msg.content == "!test") {
        // 324261688062771200, 737896996517707776
        const Alimsg = `**يا عرص هايبكسل فتح!!  \n  **`;

        let MEmb = new Discord.MessageEmbed()
            .setColor('#FF5733')
            .setTitle('**رسالة مهمة**')
            .setDescription(Alimsg)
            .setTimestamp()
            .setAuthor(msg.author.username, msg.author.displayAvatarURL({ dynamic: true }));

        client.users.cache.get(id2).send(MEmb);
        client.users.cache.get(id).send(MEmb);
    }
});
