import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ProjectType } from './project-type.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class ProjectTypeService {
  /**
   * @constructor
   * @param {Model<ProjectType>} _projectTypeModel
   */
  constructor(
    @InjectModel('ProjectType')
    private readonly _projectTypeModel: Model<ProjectType>
  ) {}

  /**
   * @method get
   * @param {IRequest} request
   * @returns {Promise<ProjectType[]>}
   */
  get = async (request: IRequest): Promise<ProjectType[]> => this._projectTypeModel.find().select(request.select).exec()
}
