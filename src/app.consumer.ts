import { AppService } from "./app.service";
import { Consumer, Subscribe } from "./redis/redis.decorator";


@Consumer()
export class AppConsumer {

    constructor(
        private readonly service: AppService
    ){}

    @Subscribe('test')
    async subscribe(message: string) {
        this.service.handle(message)
    }

}