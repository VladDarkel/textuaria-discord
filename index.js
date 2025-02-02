const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()
console.log(process.env)

// Створюємо клієнта з необхідними intents
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Обробник події "ready"
client.once('ready', () => {
  console.log(`Бот увімкнений як ${client.user.tag}`);
});

// Обробник події для отримання повідомлень
client.on('messageCreate', (message) => {
  // Ігноруємо повідомлення від інших ботів та повідомлення, що не починаються з префіксу
  const prefix = '!';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'test') {
    message.channel.send('Бот працює!');
  }
});

// Використовуємо токен із змінної середовища
client.login(process.env.BOT_TOKEN);
