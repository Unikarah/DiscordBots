const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const keepAlive = require("./server")
const { putEmotes, getChuckNorris, playSong , getBill} = require("./utils")


client.on("ready", () => {
  console.log(`Log as ${client.user.tag}`)
})

client.on("message", msg => {
  let message = msg.content.toLowerCase()
  let name = msg.author.username.toLowerCase()
  

  if (!name.includes("bully")) {
    try {
    if (message.includes("mdr") || message.includes("haha")) {
      if (Math.random() < 0.05) {
        msg.reply("j'trouve pas ça drôle...")
      }

    }
    else if (message.includes("ban"))
    {
      if (Math.random() < 0.1 ) {msg.channel.send("https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif")}
      
    }
    else if (message.includes(":kappa:")) {
      if (Math.random() < 0.1) {
        msg.reply("kappa par ci, kappa par là...")
      }
    }
    else if (message.includes(":pog:")|| message.includes(":poggers:")) {
      if (Math.random() < 0.07)
      {
        msg.reply("tu t'es cru sur twitch ???")
      }
    }
    else if (message.includes("fdp")) {
      if (Math.random() < 0.1)
      {
      msg.reply("rageux")
      }
    }
    else if (msg.content === "$chucknorris") {
      getChuckNorris().then(quote => msg.channel.send(quote))
    }
    else if (msg.content == "$help")
    {
      msg.reply("Here is what you can do:\n   - $chucknorris: sends a joke on Chuck Norris\n    - $rickroll, $ilvadanser, $communisme or $bumbum: plays music in the chan you are in\n   - shut up\n   - let me bully you for no reason\n")
    }
    else if (message.includes("retard"))
    {
      if (Math.random() < 0.05) {
        msg.reply("https://media.giphy.com/media/kxXTlV29MlEtTHdaNV/giphy.gif")
      }
    }
   if (message.includes("ban") && name.includes("unikarah"))
    {
        msg.reply("Vous êtes tous ban 😠!")
    }
    else
    {
        playSong(msg);
    }

    if (Math.random() < 0.15)
    {
        putEmotes(name, message, msg);
    }
      
    } 
  catch (error) {
    console.error("zbeub zbeub");
  }
  }
  })

keepAlive()
client.login(process.env.TOKEN)