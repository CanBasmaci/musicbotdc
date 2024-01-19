const config = require('./config.js');

if (config.shardManager.shardStatus == true) {

  const { ShardingManager } = require('discord.js');
  const manager = new ShardingManager('./bot.js', { token: config.TOKEN || process.env.TOKEN });
  manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
  manager.spawn();

} else {

  require("./bot.js")

}

// Sunucu oluşturma ve proje aktivitesi sağlama.
const express = require('express');
const app = express();
const port = 8080;

// Web sunucu
app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında yürütülüyor.`);
});