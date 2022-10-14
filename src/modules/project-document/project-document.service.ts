import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ProjectDocument } from './project-document.model'
import { IRequest } from '../../interfaces/graphql/graphql.interface'

@Injectable()
export class ProjectDocumentService {
  /**
   * @constructor
   * @param {Model<ProjectDocument>} _projectDocumentModel
   */
  constructor(
    @InjectModel('ProjectDocument')
    private readonly _projectDocumentModel: Model<ProjectDocument>
  ) {}

  /**
   * @method getBy
   * @param {IRequest} request
   * @returns {Promise<ProjectDocument[]>}
   */
  getBy = async (request: IRequest): Promise<ProjectDocument[]> => this._projectDocumentModel.find(request.args).select(request.select).exec()
}
