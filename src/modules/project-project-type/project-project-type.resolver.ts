import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { getQuerySelections } from '../../helpers/default.helper'
import { ProjectProjectTypeService } from './project-project-type.service'
import { ProjectProjectTypeEntity } from './project-project-type.entity'

@Resolver('ProjectProjectType')
export class ProjectProjectTypeResolver {
  /**
   * @constructor
   * @param {ProjectProjectTypeService} _projectProjectTypeService
   */
  constructor(private readonly _projectProjectTypeService: ProjectProjectTypeService) {}

  @Public()
  @Query('projectProjectTypes')
  async projectProjectTypes(@Args() args: any, @Info() info): Promise<ProjectProjectTypeEntity[]> {
    return this._projectProjectTypeService.find({
      select: getQuerySelections(info),
      ...args
    })
  }
}
