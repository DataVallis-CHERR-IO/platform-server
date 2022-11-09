import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProjectTypeEntity } from './project-type.entity'
import { BaseService } from '../base.service'

@Injectable()
export class ProjectTypeService extends BaseService<ProjectTypeEntity> {
  /**
   * @constructor
   * @param {Repository<ProjectTypeEntity>} _projectTypeEntityRepository
   */
  constructor(
    @InjectRepository(ProjectTypeEntity)
    private readonly _projectTypeEntityRepository: Repository<ProjectTypeEntity>
  ) {
    super(_projectTypeEntityRepository)
  }
}
