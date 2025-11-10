// index.js
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const express = require('express');

// --- Configuración del bot ---
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});

// Cuando el bot esté listo
client.once('ready', () => {
  console.log(Bot conectado como ${client.user.tag});
  client.user.setActivity('con Discord.js 😎', { type: 'PLAYING' });
});

// Mensaje de bienvenida
client.on('guildMemberAdd', member => {
  const canal = member.guild.systemChannel; // canal por defecto de bienvenida
  if(canal){
    canal.send(¡Bienvenido al servidor, ${member.user.tag}! 🎉);
  }
});

// Comandos
client.on('messageCreate', message => {
  if(message.author.bot) return; // Ignorar otros bots

  if(message.content === '!ping'){
    message.channel.send('Pong!');
  }

  if(message.content === '!info'){
    message.channel.send(Hola ${message.author}, soy un bot de prueba hecho en Discord.js.);
  }
});

// Iniciar sesión con tu token
client.login('MTQzNzM3ODU2OTY5NjMxNzQ3NA.GsBj3v.fpgyUd1AnURsROmaHZxe-6Dg23zPcXu31-pbMw'); // 🔑 Reemplaza con tu token nuevo

// --- Mini servidor para Render ---
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot activo y funcionando! 🚀');
});

app.listen(PORT, () => {
  console.log(Servidor Express escuchando en puerto ${PORT});
});