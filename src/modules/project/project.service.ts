import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Project } from './project.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'
import { StatusEnum } from '../../enums/status.enum'
import * as moment from 'moment'

@Injectable()
export class ProjectService {
  /**
   * @constructor
   * @param {Model<Project>} _projectModel
   */
  constructor(
    @InjectModel('Project')
    private readonly _projectModel: Model<Project>
  ) {}

  /**
   * @method get
   * @param {IRequest} request
   * @returns {Promise<Project[]>}
   */
  get = async (request: IRequest): Promise<Project[]> => {
    const projectModel = this._projectModel.find().select(request.select)

    !request.skip || projectModel.skip(request.skip)
    !request.limit || projectModel.limit(request.limit)
    !request.sort || projectModel.sort({ [request.sort.orderBy]: request.sort.orderDirection === 'ASC' ? 1 : -1 })

    return projectModel.exec()
  }

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<Project[]>}
   */
  getBy = async (request: IRequest): Promise<Project> => this._projectModel.findOne(request.args).select(request.select).exec()

  /**
   * @method create
   * @param {IRequest} request
   * @returns {Promise<Project>}
   */
  create = async (request: IRequest): Promise<Project> => {
    try {
      const project = new this._projectModel({
        statusId: StatusEnum.ACTIVE,
        startedAt: new Date(),
        endedAt: moment().add(1, 'weeks').toDate(),
        ...request.args
      })

      return project.save()
    } catch (error) {
      return null
    }
  }
}