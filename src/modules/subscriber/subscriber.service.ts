import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Subscriber } from './subscriber.model'
import { StatusEnum } from '../../enums/status.enum'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class SubscriberService {
  /**
   * @constructor
   * @param {Model<Subscriber>} _subscriberModel
   */
  constructor(
    @InjectModel('Subscriber')
    private readonly _subscriberModel: Model<Subscriber>
  ) {}

  /**
   * @method subscribe
   * @param {IRequest} request
   * @returns {Promise<string>}
   */
  subscribe = async (request: IRequest): Promise<string> => {
    try {
      const subscriber = await this._subscriberModel.findOne(request.args).exec()

      console.log(subscriber)
      if (subscriber) {
        return 'alreadySubscribed'
      }

      const newSubscriber = new this._subscriberModel({
        email: request.args.email,
        statusId: StatusEnum.ACTIVE,
        subscribedAt: new Date()
      })

      await newSubscriber.save()

      return 'success'
    } catch (error) {
      return 'failed'
    }
  }
}
