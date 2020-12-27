const Discord = require('discord.js');



const client = new Discord.Client();

const { token, default_prefix } = require('./config.json');

const { readdirSync } = require('fs');

var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

const { join } = require('path');

const config = require('./config.json');
client.config = config;

const leveling = require('discord-leveling');

const db = require('quick.db');


function emoji (id) {
    return client.emoji.get(id).toString();
}
 
var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

client.commands= new Discord.Collection();
//You can change the prefix if you like. It doesn't have to be ! or ;
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setActivity(`Type H! help for see commands`)
    
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = default_prefix;

    let profile = await leveling.Fetch(message.author.id);
    leveling.AddXp(message.author.id, 15);

    if(profile.xp + 15 > 150){
        leveling.AddLevel(message.author.id, 1);
        leveling.SetXp(message.author.id, 0)
        message.channel.send({embed: {
            color: "RANDOM",
            description: `هی ${message.author.username}, تو به لول  ${profile.level + 1} رسیدی`
          }});   
        //(`هی ${message.author.username}, تو به لول  ${profile.level + 1} رسیدی`)
    }
    if (message.content === `${prefix}user-info`) {
        message.channel.send({embed: {
            color: "RANDOM",
            description: `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
          }});
          let afkcheck = bot.afk.get(message.author.id);
          if (afkcheck) return [bot.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];
    }
      if (message.content === `${prefix}user-info`) {
        message.channel.send({embed: {
            color: "RANDOM",
            description: `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
          }});
          let afkcheck = bot.afk.get(message.author.id);
          if (afkcheck) return [bot.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];
    }
    if (message.content === `${prefix}Verify`){

        let role = message.member.guild.roles.cache.find(role => role.name === "🖤  | Snakes");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        message.channel.send({embed: {
            color: "RANDOM",
            description: ` هی <@${message.author.id}> تو وریفای شدی`
          }});
          message.delete()
    };
    //var facts = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"];
//var fact = Math.floor(Math.random() * (number - 1 +1)) +1;
//message.channel.send(facts[fact]);

    if (message.content === "fuck") {
         message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت فاک `
          }});
          message.delete()
    }
    if (message.content === "کیر"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت کیر `
          }}); 
          
          message.delete()
    }
    
    if (message.content === "کس"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت کس `
          }});
          message.delete()
    }
    if (message.content === "کون"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت کون `
          }});
          message.delete()
    }
    if (message.content === "کونی"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت کونی `
          }});
          message.delete()
    }
    if (message.content === "عن"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت عن `
          }});
          message.delete()
    }
    if (message.content === "گوه"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت گوه `
          }});
          message.delete()
    }
    if (message.content === "جنده"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت جنده `
          }});
          message.delete()
    }
    if (message.content === "دیوث"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت دیوث `
          }});
          message.delete()
    }
    if (message.content === "goh"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت گوه `
          }}); 
          message.delete()
    }
    if (message.content === "kir"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت کیر `
          }}); 
          message.delete()
    }
    if (message.content === "kon"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت کون `
          }});
          message.delete()
    }
    if (message.content === "kos"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت کس `
          }});
          message.delete()
    }
    if (message.content === "beach"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت بچ `
          }}); 
          message.delete()
    }
    if (message.content === "nanat"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت ننت `
          }}); 
          message.delete()
    }
    if (message.content === "an"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@641300208134651905>, <@${message.author.id}> گفت ان `
          }});
          message.delete()
    }
    if (message.content === "mamnon"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
          message.delete()
    }
    if (message.content === "mamnoon"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
    }
    if (message.content === "mersi"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
    }
    if (message.content === "mersy"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
    }
    if (message.content === "ممنون"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
    }
    if (message.content === "مرسی"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
    }
    if (message.content === "مرسیی"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
    }
    if (message.content === "مرسیی"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'خواهش میکنم'
          }}); 
    }
    
    if (message.content === "salam"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'سلام'
          }}); 
    }
    if (message.content === "سلام"){
        message.channel.send({embed: {
            color: "RANDOM",
            description: 'سلام'
          }});   
    }
    if (message.content === "heart"){
        message.react('❤');
        message.react('💙');
        message.react('🧡');
        message.react('💛');
        message.react('💜');
        message.react('🤍');
        message.react('🖤');
        message.react('🤎');
    }
    if (message.content === "clap"){
        message.react('👏');
        message.react('👏🏻');
        message.react('👏🏽');
        message.react('👏🏿');
    }
    if (message.content === '😐'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> پوکر کی بودی تو کوچولو `
          }});   
    }
    if (message.content === '😂'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> میخندی؟ `
          }});   
    }
    if (message.content === '🤣'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> انقدر خنده داره؟ `
          }});   
    }
    if (message.content === '😅'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> یا بخند یا نخند دیگه این چیه `
          }});   
    }
    if (message.content === '😍'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> لیلی هستی یا مجنون؟ `
          }});   
    }
    if (message.content === '😎'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> عینکت تو حلقم `
          }});   
    }
    if (message.content === '🙂'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> هپی فیس کی بودی تو گوگولی `
          }});   
    }
    if (message.content === '😶'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> دهنت کو؟ `
          }});   
    }
    if (message.content === '🙁'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> درست میشه ناراحت نباش `
          }});   
    }
    if (message.content === '🤩'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> تو چشمات ستاره می بینم `
          }});   
    }
    if (message.content === '🧐'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> عینکتو دوست دارم `
          }});   
    }
    if (message.content === '😭'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}> گریه نکن عزیزمم، دنیا هنوز قشنگه `
          }});   
    }
    if (message.content === '🙃'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}>  نمیخوام بزنم تو ذوقت ولی برعکسی`
          }});   
    }
    if (message.content === '😅'){
        message.channel.send({embed: {
            color: "RANDOM",
            description: `<@${message.author.id}>  عرق کردی چرا`
          }});   
    }



    //😅
    if (message.content === `${prefix}help`){
        const embed = new Discord.MessageEmbed()
  .setTitle("شما کمک میخواستی؟")
  .setAuthor("Hitler", "https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
  .setColor("RANDOM")
  .setDescription("من اومدم کمکت کنم")
  .setFooter('موفق باشی', "https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
  .setImage("https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
  .setThumbnail("https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
  
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/v12/class/MessageEmbed")
  .addFields({ name: "درباره سرور",
      value: "، لیست کامند های بات هم برات تو چنلی که پیام دادی فرستادماینجا یه سرور متفاوته، هم گیمینگه هم آموزش های خفن داره", inline: false })
  .addFields({ name: '\u200b', value: '\u200b' })
  .addFields({ name: "حرف آخر", value: "امیدوارم لحظات خوشی رو تو این سرور سپری کنی", inline: true});
        message.author.send(embed)
          };
          if (message.content === `${prefix}invite`){
            const inviter = new Discord.MessageEmbed()
            .setTitle("invite")
            .setAuthor("Hitler", "https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            .setColor("RANDOM")
            .setDescription("")
            .setFooter('', "https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            .setImage("https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            .setThumbnail("https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/v12/class/MessageEmbed")
            .addFields({ name: "\u200b",
                value: "https://discord.gg/B3DnbsqUpZ", inline: false })
            .addFields({ name: "\u200b",
                value: "👨‍👧 Mokhtalet 👨‍👧", inline: false })
            .addFields({ name: "\u200b",
                value: "🔞 NSFW 🔞", inline: false })
            .addFields({ name: "\u200b",
                value: "⭕️ Cheat و Hack ⭕️", inline: false })
            .addFields({ name: "\u200b",
                value: "🎮 Game 🎮", inline: false })
            .addFields({ name: "\u200b",
                value: "Va … va ... va …", inline: false })
            .addFields({ name: "\u200b",
                value: "why you bully me !!?!", inline: false })
            .addFields({ name: "\u200b",
                value: "BODO BIA 🏃‍♂️", inline: false });
            
    
            message.channels.author.send(inviter);
          }

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
client.on("message", function(message) {
 
    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (parts[0] === "=image") { // Check if first part of message is image command
 
        // call the image function
        image(message, parts); // Pass requester message to image function
 
    }
 
});
 
function image(message, parts) {
 
    /* extract search query from message */
 
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send( urls[0] );
    });
 
}

client.login(token);
