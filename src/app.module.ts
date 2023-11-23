import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { AppService } from './app.service';
import { AppService2 } from './app.service2';
import { AppService3 } from './app.service3';
import { AppConsumer } from './app.consumer';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [RedisModule],
  providers: [AppConsumer, AppService, AppService2, AppService3]
})
export class AppModule { }