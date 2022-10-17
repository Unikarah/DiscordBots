const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const fetch = require('node-fetch');

function getChuckNorris() {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data['value']
    });
}

function putEmotes(name, message, msg) {
  if (name.includes("nikow") || message.includes("cat_gun")) {
    msg.react("890320426671165510")
  }

  else if (message.includes("majeur")) {
    msg.react('710252582278529054')
  }
  else if (message.includes("majeure")) {
    msg.react('797056741165629460')
  }
  else if (message.includes("clown")) {
    msg.react("🤡")
  }
  else if (message.includes("smart")) {
    msg.react("696737067228725248")
  }
  else if (message.includes("eyes")) {
    msg.react("👀")
  }
  else if (message.includes("srs") || name.includes("leme")) {
    msg.react("🧂")
  }
  else if (name.includes("tao")) {
    msg.react("😎")
  }
  else if (name.includes("turtlesmoke")) {
    msg.react("841620559828615198")
  }
  else if (name.includes("firewop")) {
    msg.react("891701030939656253")
  }
  else if (name.includes("firox")) {
    msg.react("🇹")
    msg.react("🇬")
  }
  else if (name.includes("unikarah")) {
    msg.react("🥵")
  }
  else if (name.includes("amme")) {
    msg.react("1030504545970835456")
  }
  else if (name.includes("bictole")) {
    try {
      msg.react("778385511722516491");
    } catch (error) {
      msg.react("💼")
    }
  }
  else if (name.includes("vivi")) {
    msg.react("779313600782925824")
  }
  else if (name.includes("leiyks")) {
    msg.react("1019629771530977352")
  }
  else if (name.includes("baptman")) {
    msg.react("1019629768238440488")
  }
  else if (name.includes("utybo")) {
    msg.react("🇲")
    msg.react("🇦")
    msg.react("🇹")
    msg.react("🇮")
    msg.react("🇪")
  }
  else if (name.includes("adrien")) {
    msg.react("1030504175534096485")
  }
  else {
    msg.react("993864727535034519")
  }

}

function playSong(msg) {
  var chan = msg.member.voice.channel

  if (chan == null) {
    return;
  }
  if (msg.content === "$rickroll" && chan) {

    const connection = joinVoiceChannel({
      channelId: chan.id,
      guildId: chan.guild.id,
      adapterCreator: chan.guild.voiceAdapterCreator,
    });
    const player = createAudioPlayer();
    connection.subscribe(player);
    player.pause();
    setTimeout(() => player.unpause(), 5_000);
    player.play(createAudioResource("/home/runner/Bully-Bot/sounds/rickroll.mp3"))
  }
  else if (msg.content === "$communisme" && chan) {
    const connection = joinVoiceChannel({
      channelId: chan.id,
      guildId: chan.guild.id,
      adapterCreator: chan.guild.voiceAdapterCreator,
    });
    const player = createAudioPlayer();
    connection.subscribe(player);
    player.pause();
    setTimeout(() => player.unpause(), 5_000);

    player.play(createAudioResource("/home/runner/Bully-Bot/sounds/urss.mp3"))
  }
  else if (msg.content === "$ilvadanser" && chan) {

    const connection = joinVoiceChannel({
      channelId: chan.id,
      guildId: chan.guild.id,
      adapterCreator: chan.guild.voiceAdapterCreator,
    });
    const player = createAudioPlayer();
    connection.subscribe(player);
    player.pause();
    setTimeout(() => player.unpause(), 5_000);
    player.play(createAudioResource("/home/runner/Bully-Bot/sounds/ilvadanser.mp3"))
  }
  else if (msg.content === "$bumbum" && chan) {
    const connection = joinVoiceChannel({
      channelId: chan.id,
      guildId: chan.guild.id,
      adapterCreator: chan.guild.voiceAdapterCreator,
    });
    const player = createAudioPlayer();
    connection.subscribe(player);
    player.pause();
    setTimeout(() => player.unpause(), 5_000);
    player.play(createAudioResource("/home/runner/Bully-Bot/sounds/bumbum.mp3"))
  }
}

module.exports = { getChuckNorris: getChuckNorris, putEmotes: putEmotes, playSong: playSong };