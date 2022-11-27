import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProjectEntity } from './project.entity'
import { Repository } from 'typeorm'
import { BaseService } from '../base.service'
import { Project } from '../../graphql'
import { ProjectProjectTypeService } from '../project-project-type/project-project-type.service'
import { ProjectProjectTypeEntity } from '../project-project-type/project-project-type.entity'
import { datetimeOptions } from '../../config/default.config'
import * as moment from 'moment'
import { IQueryOptions } from '../../interfaces/graphql/graphql.interface'
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions'
import { StatusEnum } from '../../enums/status.enum'

@Injectable()
export class ProjectService extends BaseService<ProjectEntity> {
  /**
   * @constructor
   * @param {Repository<ProjectEntity>} _projectEntityRepository
   * @param {ProjectProjectTypeService} _projectProjectTypeService
   */
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly _projectEntityRepository: Repository<ProjectEntity>,
    private readonly _projectProjectTypeService: ProjectProjectTypeService
  ) {
    super(_projectEntityRepository)
  }

  /**
   * @method create
   * @param {Project} project
   * @returns {Promise<ProjectEntity>}
   */
  create = async (project: Project): Promise<ProjectEntity> => {
    try {
      const newProject = await this._projectEntityRepository.save({
        ...project,
        createdAt: moment().format(datetimeOptions.format)
      })

      for (const projectType of project.projectTypes) {
        const projectProjectTypeEntity = new ProjectProjectTypeEntity()
        projectProjectTypeEntity.projectId = newProject.id
        projectProjectTypeEntity.projectTypeId = projectType.id
        projectProjectTypeEntity.createdAt = moment().format(datetimeOptions.format)

        await this._projectProjectTypeService.save(projectProjectTypeEntity)
      }

      return newProject
    } catch (error) {
      return null
    }
  }

  /**
   * @method get
   * @param {IQueryOptions} options
   * @returns {Promise<ProjectEntity[]>}
   */
  get = async (options: IQueryOptions<ProjectEntity>): Promise<ProjectEntity[]> => {
    options.where = { statusId: StatusEnum.ACTIVE }

    return this._projectEntityRepository.find({
      ...options
    } as FindManyOptions)
  }
}
