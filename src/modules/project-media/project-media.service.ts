import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ProjectMedia } from './project-media.model'
import { IUploadReq, IUploadRes, IRequest } from '../../interfaces/graphql/graphql.interface'
import { StatusEnum } from '../../enums/status.enum'
import { HttpService } from '@nestjs/axios'
import { ipfsHeaders } from '../../config/default.config'

@Injectable()
export class ProjectMediaService {
  /**
   * @constructor
   * @param {Model<ProjectMedia>} _projectMediaModel
   * @param {HttpService} _httpService
   */
  constructor(
    @InjectModel('ProjectMedia')
    private readonly _projectMediaModel: Model<ProjectMedia>,
    private readonly _httpService: HttpService
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
      const uploaded = await this.upload({
        title: request.args.title,
        content: request.args.content
      })

      const projectMedia = new this._projectMediaModel({
        statusId: StatusEnum.ACTIVE,
        path: uploaded[0].path,
        ...request.args
      })

      await projectMedia.save()
      return true
    } catch (error) {
      return false
    }
  }

  upload = async (upload: IUploadReq): Promise<IUploadRes[]> =>
    (
      await this._httpService.axiosRef.post(
        process.env.IPFS_UPLOAD_URL,
        [
          {
            path: `media/${upload.title}`,
            content: upload.content
          }
        ],
        { ...ipfsHeaders }
      )
    ).data
}
