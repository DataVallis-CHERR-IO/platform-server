import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CampaignDocument } from './campaign-document.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class CampaignDocumentService {
  /**
   * @constructor
   * @param {Model<CampaignDocument>} _campaignDocumentModel
   */
  constructor(
    @InjectModel('CampaignDocument')
    private readonly _campaignDocumentModel: Model<CampaignDocument>
  ) {}

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<CampaignDocument[]>}
   */
  getBy = async (request: IRequest): Promise<CampaignDocument[]> =>
    this._campaignDocumentModel.find({ campaignId: 'CvEWWnSqDKKX4X54VyJA9bK3' }).select(request.select).exec()
}
