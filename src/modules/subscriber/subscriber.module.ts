import { Module } from '@nestjs/common'
import { SubscriberService } from './subscriber.service'
import { SubscriberResolver } from './subscriber.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SubscriberEntity } from './subscriber.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SubscriberEntity])],
  providers: [SubscriberService, SubscriberResolver],
  exports: [SubscriberService]
})
export class SubscriberModule {}
