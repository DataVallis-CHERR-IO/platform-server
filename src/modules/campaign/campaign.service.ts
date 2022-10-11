import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Campaign } from './campaign.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class CampaignService {
  /**
   * @constructor
   * @param {Model<Campaign>} _campaignModel
   */
  constructor(
    @InjectModel('Campaign')
    private readonly _campaignModel: Model<Campaign>
  ) {}

  /**
   * @method get
   * @param {IRequest} request
   * @returns {Promise<Campaign[]>}
   */
  get = async (request: IRequest): Promise<Campaign[]> => this._campaignModel.find().select(request.select).exec()

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<Campaign[]>}
   */
  getBy = async (request: IRequest): Promise<Campaign> => this._campaignModel.findOne(request.args).select(request.select).exec()
}
