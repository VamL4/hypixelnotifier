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
        const interval = setInterval(() => {
            util.status('play.hypixel.net')
                .then((response) => {
                    console.log(response.onlinePlayers);
                    if (response.onlinePlayers >= 20) {
                        // 324261688062771200, 737896996517707776
                        const Aliav = client.users.cache.get(id).displayAvatarURL({ dynamic: true });
                        const Aliname = client.users.cache.get(id).username;
                        const Alimsg = `**يا عرص هايبكسل فتح!!  \n 
        ${response.onlinePlayers} **`;

                        let MEmb = new Discord.MessageEmbed()
                            .setColor('#FF5733')
                            .setTitle('**رسالة مهمة**')
                            .setDescription(Alimsg)
                            .setTimestamp()
                            .setAuthor(Aliname, Aliav);

                        client.users.cache.get(id).send(MEmb);
                        client.users.cache.get(id2).send(MEmb);
                    }
                })
        }, 5000)
    }
});
