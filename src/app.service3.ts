import { Implement } from "./app.decorator";
import { AppService } from "./app.service";

@Implement(AppService)
export class AppService3 {

    filter(message: string) {
        return true
    }

    async handle(message: string) {
        console.log(message + 3)
        return message + 3
    }

}