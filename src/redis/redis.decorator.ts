import { Injectable } from "@nestjs/common"
import { RedisConsumer } from "./redis.consumer"

export const Consumer = (): ClassDecorator => {
    return (target) => {
        Object.setPrototypeOf(target.prototype, RedisConsumer.prototype)
        return Injectable()(target)
    }
}

export const Subscribe = (key: string) => {
    return (target: any, property: string) => {
        if (!target?.metadata) {
            target.metadata = {}
        }
        if (!target?.metadata[key]) {
            target.metadata[key] = property
        }
        Reflect.defineMetadata(key, true, target, property);
    }
}