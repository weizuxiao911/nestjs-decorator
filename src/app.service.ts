import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class AppService implements OnModuleInit {

    static children = []

    onModuleInit() {
        AppService.children.push(this)
    }

    async handle(message: string) {
        const handler = AppService.children.filter(it => 'filter' in it && it?.filter(message))
        if (!handler?.length) {
            throw new Error('No handle...')
        }
        const handle = handler.map(it => it?.handle(message))
        return await Promise.all(handle)
    }


}