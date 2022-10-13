import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { SubscriberService } from './subscriber.service'
import { Public } from '../../decorators/public.decorator'

@Resolver('Subscriber')
export class SubscriberResolver {
  /**
   * @constructor
   * @param {SubscriberService} _subscriberService
   */
  constructor(private readonly _subscriberService: SubscriberService) {}

  @Public()
  @Mutation('subscribe')
  async subscribe(@Args() args): Promise<any> {
    await this._subscriberService.subscribe({
      args
    })

    return {
      message: 'Account has been successfully created',
      lkMessage: 'accountSignupSuccess'
    }
  }
}
