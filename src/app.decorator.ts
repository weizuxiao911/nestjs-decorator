import { Injectable } from "@nestjs/common"
import { AppService } from "./app.service"

export const Implement = (parent: any): ClassDecorator => {
    return (target) => {
        Object.setPrototypeOf(target.prototype, parent.prototype)
        return Injectable()(target)
    }
}
