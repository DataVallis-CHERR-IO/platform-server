import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ProjectMedia } from './project-media.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'
import { Project } from '../project/project.model'
import { StatusEnum } from '../../enums/status.enum'
import * as moment from 'moment/moment'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

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
   * @returns {Promise<Project>}
   */
  create = async (request: IRequest): Promise<Project> => {
    try {
      console.log(process.env.API_KEY)
      console.log(process.env.MORALIS_API_KEY)
      const resp = await this.upload(request.args.content.toString('base64'))
      console.log(resp)
      // console.log(request.args.content.slice(0, 30))
      // console.log(request.args.content.slice(-30))
      // const media = await upload(request.args.content)
      // console.log(media)
      // const projectMedia = new this._projectMediaModel({
      //   statusId: StatusEnum.ACTIVE,
      //   ...request.args
      // })
      //
      // return projectMedia.save()
      return null
    } catch (error) {
      console.log(error)
      console.log(process.env.API_KEY)
      // console.log(error)
      return null
    }
  }
  upload = async (content): Promise<AxiosResponse<any>> => {
    const ipfsArray = [];
    ipfsArray.push({
      path: `media/321321312`,
      content,
    })
    return await this._httpService.axiosRef.post(
      'https://deep-index.moralis.io/api/v2/ipfs/uploadFolder', ipfsArray,
      {
        headers: {
          'X-API-KEY': process.env.MORALIS_API_KEY,
          'Content-Type': 'application/json',
          accept: 'application/json'
        }
      }
    )
  }
}
