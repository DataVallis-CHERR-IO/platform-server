import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectMediaService } from './project-media.service'
import { ProjectMedia } from './project-media.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('ProjectMedia')
export class ProjectMediaResolver {
  /**
   * @constructor
   * @param {ProjectMediaService} _projectMediaService
   */
  constructor(private readonly _projectMediaService: ProjectMediaService) {}

  @Public()
  @Query('projectMedia')
  async projectMedia(@Args() args: any, @Info() info): Promise<ProjectMedia[]> {
    return this._projectMediaService.getBy({
      select: getQuerySelections(info),
      args
    })
  }
}
