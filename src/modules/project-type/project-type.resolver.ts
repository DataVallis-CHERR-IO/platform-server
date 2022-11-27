import { Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { getQuerySelections } from '../../helpers/default.helper'
import { ProjectTypeService } from './project-type.service'
import { ProjectTypeEntity } from './project-type.entity'

@Resolver('ProjectType')
export class ProjectTypeResolver {
  /**
   * @constructor
   * @param {ProjectTypeService} _projectTypeService
   */
  constructor(private readonly _projectTypeService: ProjectTypeService) {}

  @Public()
  @Query('projectTypes')
  async projectTypes(@Info() info): Promise<ProjectTypeEntity[]> {
    return this._projectTypeService.find({
      select: getQuerySelections(info)
    })
  }
}
