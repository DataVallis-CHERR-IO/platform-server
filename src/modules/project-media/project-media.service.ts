import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ProjectMedia } from './project-media.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'
import { StatusEnum } from '../../enums/status.enum'
import { UploadService } from '../upload/upload.service'

@Injectable()
export class ProjectMediaService {
  /**
   * @constructor
   * @param {Model<ProjectMedia>} _projectMediaModel
   * @param {UploadService} _uploadService
   */
  constructor(
    @InjectModel('ProjectMedia')
    private readonly _projectMediaModel: Model<ProjectMedia>,
    private readonly _uploadService: UploadService
  ) {}

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<ProjectMedia[]>}
   */
  getBy = async (request: IRequest): Promise<ProjectMedia[]> => this._projectMediaModel.find(request.args).select(request.select).exec()

  /**
   * @method create
   * @param {IRequest} request
   * @returns {Promise<boolean>}
   */
  create = async (request: IRequest): Promise<boolean> => {
    try {
      const path = await this._uploadService.upload({
        title: request.args.title,
        extension: `.${request.args.format}`,
        content: request.args.content
      })

      const projectMedia = new this._projectMediaModel({
        statusId: StatusEnum.ACTIVE,
        path,
        ...request.args
      })

      await projectMedia.save()
      return true
    } catch (error) {
      return false
    }
  }
}
