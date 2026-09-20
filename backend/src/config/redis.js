const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'tawny-engine-functional-84354.db.redis.io',
        port: 11375
    }
});

module.exports = redisClient;