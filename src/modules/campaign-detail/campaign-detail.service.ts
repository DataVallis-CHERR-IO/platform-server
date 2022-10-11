import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CampaignDetail } from './campaign-detail.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class CampaignDetailService {
  /**
   * @constructor
   * @param {Model<CampaignDetail>} _campaignDetailModel
   */
  constructor(
    @InjectModel('CampaignDetail')
    private readonly _campaignDetailModel: Model<CampaignDetail>
  ) {}

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<CampaignDetail>}
   */
  getBy = async (request: IRequest): Promise<CampaignDetail> => this._campaignDetailModel.findOne(request.args).select(request.select).exec()
}
