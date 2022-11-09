import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseService } from '../base.service'
import { ProjectMediaEntity } from './project-media.entity'
import { ProjectMedia } from '../../graphql'
import * as moment from 'moment/moment'

@Injectable()
export class ProjectMediaService extends BaseService<ProjectMediaEntity> {
  /**
   * @constructor
   * @param {Repository<ProjectMediaEntity>} _projectMediaEntityRepository
   */
  constructor(
    @InjectRepository(ProjectMediaEntity)
    private readonly _projectMediaEntityRepository: Repository<ProjectMediaEntity>
  ) {
    super(_projectMediaEntityRepository)
  }

  /**
   * @method create
   * @param {ProjectMedia} projectMedia
   * @returns {Promise<boolean>}
   */
  create = async (projectMedia: ProjectMedia): Promise<boolean> => {
    try {
      await this._projectMediaEntityRepository.save({
        ...projectMedia,
        createdAt: moment().format(process.env.DATETIME_FORMAT)
      })

      return true
    } catch (error) {
      return false
    }
  }
}
