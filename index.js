const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const PREFIX = '--';
//new Discord.GuildMember(bot, data, guild);
//



const bot = new Discord.Client();

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {

        case "poll":
            const Embed = new   Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Inititate Poll")
            .setDescription("--poll to initiate a simple yes or no poll")

            if(!args[1]) {
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("1️⃣");
                messageReaction.react("2️⃣");
                messageReaction.react("3️⃣");
                message.delete({timeout: 1000}).catch(console.error);
            });

            break;


    }
});

bot.on('message', msg => {
    if (msg.content === '--ping') {
        msg.reply('pong');
    }
});

bot.on('message', msg => {
    if (msg.content === '--help') {
        msg.reply('hey i listen to --! Try --pfp for example');
    }
});


bot.on('message', message => {
    if (message.content === '--pfp') {
    //    message.reply(message.author.displayAvatarURL());
    //}
    const embed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle("Profile picture of " + message.member.user.tag)
        .setImage(message.author.avatarURL())
        message.channel.send(embed)
    } 
});

bot.on('message', message => {
    if (message.content === '--Kirby') {
      const attachment = new MessageAttachment('https://upload.wikimedia.org/wikipedia/en/2/2d/SSU_Kirby_artwork.png');
      message.channel.send(attachment);
      message.channel.send('enjoy a picture of Kirby');
    }
  });


bot.login('NzcyOTE2MzQwMzAxNDk2Mzcw.X6Bobw.rAF_rgidHHAvLjl5WpiQWTL3jhg');

