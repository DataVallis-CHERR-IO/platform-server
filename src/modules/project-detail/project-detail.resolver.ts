import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectDetailService } from './project-detail.service'
import { ProjectDetail } from './project-detail.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('ProjectDetail')
export class ProjectDetailResolver {
  /**
   * @constructor
   * @param {ProjectDetailService} _projectDetailService
   */
  constructor(private readonly _projectDetailService: ProjectDetailService) {}

  @Public()
  @Query('projectDetail')
  async projectDetail(@Args() args: any, @Info() info): Promise<ProjectDetail> {
    return this._projectDetailService.getBy({
      select: getQuerySelections(info),
      args
    })
  }

  @Public()
  @Mutation('createProjectDetail')
  async createProjectDetail(@Args() args: any): Promise<ProjectDetail> {
    return this._projectDetailService.create({ args })
  }
}
