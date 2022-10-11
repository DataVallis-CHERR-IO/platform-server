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
   * @returns {Promise<Campaign[]>}
   */
  subscribe = async (request: IRequest): Promise<boolean> => {
    const subscriber = new this._subscriberModel({
      email: request.args.email,
      statusId: StatusEnum.ACTIVE,
      subscribedAt: new Date()
    })
    await subscriber.save()

    return true
  }
}
