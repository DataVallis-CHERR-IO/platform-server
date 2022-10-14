import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ProjectMedia } from './project-media.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class ProjectMediaService {
  /**
   * @constructor
   * @param {Model<ProjectMedia>} _projectMediaModel
   */
  constructor(
    @InjectModel('ProjectMedia')
    private readonly _projectMediaModel: Model<ProjectMedia>
  ) {}

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<ProjectMedia[]>}
   */
  getBy = async (request: IRequest): Promise<ProjectMedia[]> => this._projectMediaModel.find(request.args).select(request.select).exec()
}
