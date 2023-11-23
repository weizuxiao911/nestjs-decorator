import { Redis } from "ioredis";
import { config } from "../src/redis/redis.config";

const conf = config.getSync('redis')
const client: Redis = new Redis(conf)
client.publish('test', Buffer.from('hello'))
console.log('publish...')