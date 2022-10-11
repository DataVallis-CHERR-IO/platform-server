import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SubscriberService } from './subscriber.service'
import { SubscriberResolver } from './subscriber.resolver'
import { SubscriberSchema } from './subscriber.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Subscriber',
        schema: SubscriberSchema,
        collection: 'Subscriber'
      }
    ])
  ],
  providers: [SubscriberService, SubscriberResolver],
  exports: [SubscriberService]
})
export class SubscriberModule {}
