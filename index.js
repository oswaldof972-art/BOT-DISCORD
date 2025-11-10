const { Client, GatewayIntentBits, Partials } = require('discord.js');

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
  console.log(`Bot conectado como ${client.user.tag}`);
  client.user.setActivity('con Discord.js 😎', { type: 'PLAYING' });
});

// Mensaje de bienvenida
client.on('guildMemberAdd', member => {
  const canal = member.guild.systemChannel; // canal por defecto de bienvenida
  if(canal){
    canal.send(`¡Bienvenido al servidor, ${member.user.tag}! 🎉`);
  }
});

// Comandos
client.on('messageCreate', message => {
  if(message.author.bot) return; // Ignorar otros bots

  if(message.content === '!ping'){
    message.channel.send('Pong!');
  }

  if(message.content === '!info'){
    message.channel.send(`Hola ${message.author}, soy un bot de prueba hecho en Discord.js.`);
  }
});

// Iniciar sesión con tu token
client.login('MTQzNzM3ODU2OTY5NjMxNzQ3NA.G4C_gL.Szeqx6Kbn30lpO337jZodJS--NgWb1dsAdMJtw');
