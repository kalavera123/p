const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**Karma Bot Project** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/api/oauth2/authorize?client_id=797568496934191154&permissions=8&scope=bot) to Invite me!\nThanks for supporting me.** ❤️"
    )
    .addField(
      "Support Link: ",
      `**[Click Here!](https://discord.gg/M2fRwMuEpp)**`,
      true
    )
    )
    .setTimestamp()
    .setFooter(
      "© Karma",
      "https://uploads.scratch.mit.edu/users/avatars/24905589.png"
    )
    .setColor(config.embedcolor);
    message.channel.send(embed)
    }
}

