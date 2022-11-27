import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOneOptions, Repository } from 'typeorm'
import { SubscriberEntity } from './subscriber.entity'
import { datetimeOptions } from '../../config/default.config'
import * as moment from 'moment'

@Injectable()
export class SubscriberService extends BaseService<SubscriberEntity> {
  /**
   * @constructor
   * @param {Repository<SubscriberEntity>} _subscriberEntityRepository
   */
  constructor(
    @InjectRepository(SubscriberEntity)
    private readonly _subscriberEntityRepository: Repository<SubscriberEntity>
  ) {
    super(_subscriberEntityRepository)
  }

  /**
   * @method subscribe
   * @param {string} email
   * @returns {Promise<string>}
   */
  subscribe = async (email: string): Promise<string> => {
    try {
      const subscriber = await this._subscriberEntityRepository.findOne({ where: { email } } as FindOneOptions)

      if (subscriber) {
        return 'alreadySubscribed'
      }

      const subscriberEntity = new SubscriberEntity()
      subscriberEntity.email = email
      subscriberEntity.subscribedAt = moment().format(datetimeOptions.format)

      await this._subscriberEntityRepository.save(subscriberEntity)

      return 'success'
    } catch (error) {
      return 'failed'
    }
  }
}
