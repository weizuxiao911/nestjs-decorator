import { Implement } from "./app.decorator";
import { AppService } from "./app.service";

@Implement(AppService)
export class AppService2 {

    filter(message: string) {
        return true
    }

    async handle(message: string) {
        console.log(message + 2)
        return message + 2
    }

}