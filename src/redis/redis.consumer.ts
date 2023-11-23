import Redis from "ioredis"
import { config } from "./redis.config"
import { OnModuleInit } from "@nestjs/common"

export abstract class RedisConsumer implements OnModuleInit {

    private client: Redis

    onModuleInit() {
        const metadata = this['metadata']
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        const options = config.getSync('redis')
        this.client = new Redis(options)
        this.client.subscribe(...Object.keys(metadata))
        this.client.on('message', (ch, message) => {
            const fs = methods.filter(f => Reflect.getMetadata(ch, this, f) && Object.prototype.toString.call(f))
            fs.length && this[fs[0]](message)
        })
    }


}