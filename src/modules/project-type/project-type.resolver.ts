import { Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectTypeService } from './project-type.service'
import { getQuerySelections } from '../../helpers/default.helper'
import { ProjectType } from './project-type.model'

@Resolver('ProjectType')
export class ProjectTypeResolver {
  /**
   * @constructor
   * @param {ProjectTypeService} _projectTypeService
   */
  constructor(private readonly _projectTypeService: ProjectTypeService) {}

  @Public()
  @Query('projectTypes')
  async projectTypes(@Info() info): Promise<ProjectType[]> {
    return await this._projectTypeService.get({
      select: getQuerySelections(info)
    })
  }
}
