const Discord = require("discord.js");
const client = new Discord.Client();



 client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`$help | $inv | Free Nitro`,'https://www.twitch.tv/zya2d_')
    client.user.setStatus('ldle');
});



client.on('message', msg => {

  if (msg.content.startsWith("$help")) {
    msg.channel.send(`**
 $free nitro | Nitro code answers you
 
 $inv | add bot 
 
 
 
	**`)

  }
})



//................................................................




//................................................................





//................................................................

client.on('message',msg=>{ 
  if(msg.content==='$inv') 
msg.reply('https://discordapp.com/oauth2/authorize?client_id=603201539691249694&permissions=2080374975&scope=bot');
})



//................................................................

var prefix = "$";
client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'say pôrn')) {
  const args = message.content.substring(prefix.length).split(' ');

 message.delete();
args.shift() 
let msg = args.join(' ') 
message.channel.createWebhook(message.author.username, message.author.avatarURL) 
    .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token) 
        user.send(msg); 
        user.delete() 
    })
    .catch(console.error)
 }
});

//say code


client.on('message',msg=>{ 
  if(msg.content==='$free nitro') 
msg.reply('** https://discord.gift/ZAwmypSERAxtMEUB  **');
})



var prefix = "$"
client.on('message',async message => {
  if (message.content.startsWith(prefix+"bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .setTitle('``INFO '+client.user.username+'``')
          .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
          .addField('``servers``', [client.guilds.size], true)
          .addField('``channels``' , `[ ${client.channels.size} ]` , true)
          .addField('``Users``' ,`[ ${client.users.size} ]` , true)
          .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
          .addField('``My ID``' , `[ ${client.user.id} ]` , true)
          .addField('``My Prefix``' , `[ ${prefix} ]` , true)
          .addField('``My Language``' , `[ Java Script ]` , true)
          .setFooter('By: Rita#6707 ')
  })
}
});




client.login(process.env.BOT_TOKEN);
