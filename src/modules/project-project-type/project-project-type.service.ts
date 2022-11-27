import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProjectProjectTypeEntity } from './project-project-type.entity'
import { BaseService } from '../base.service'

@Injectable()
export class ProjectProjectTypeService extends BaseService<ProjectProjectTypeEntity> {
  /**
   * @constructor
   * @param {Repository<ProjectProjectTypeEntity>} _projectProjectTypeEntityRepository
   */
  constructor(
    @InjectRepository(ProjectProjectTypeEntity)
    private readonly _projectProjectTypeEntityRepository: Repository<ProjectProjectTypeEntity>
  ) {
    super(_projectProjectTypeEntityRepository)
  }
}
