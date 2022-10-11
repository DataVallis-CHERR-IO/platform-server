import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CampaignImage } from './campaign-image.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class CampaignImageService {
  /**
   * @constructor
   * @param {Model<CampaignImage>} _campaignImageModel
   */
  constructor(
    @InjectModel('CampaignImage')
    private readonly _campaignImageModel: Model<CampaignImage>
  ) {}

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<CampaignImage[]>}
   */
  getBy = async (request: IRequest): Promise<CampaignImage[]> => this._campaignImageModel.find(request.args).select(request.select).exec()
}
