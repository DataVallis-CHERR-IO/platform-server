import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ProjectDetail } from './project-detail.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'
import { Project } from '../project/project.model'

@Injectable()
export class ProjectDetailService {
  /**
   * @constructor
   * @param {Model<ProjectDetail>} _projectDetailModel
   */
  constructor(
    @InjectModel('ProjectDetail')
    private readonly _projectDetailModel: Model<ProjectDetail>
  ) {}

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<ProjectDetail>}
   */
  getBy = async (request: IRequest): Promise<ProjectDetail> => this._projectDetailModel.findOne(request.args).select(request.select).exec()

  /**
   * @method create
   * @param {IRequest} request
   * @returns {Promise<Project>}
   */
  create = async (request: IRequest): Promise<Project> => {
    try {
      const projectDetail = new this._projectDetailModel(request.args)

      return projectDetail.save()
    } catch (error) {
      return null
    }
  }
}
