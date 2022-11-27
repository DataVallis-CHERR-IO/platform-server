import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectMediaService } from './project-media.service'
import { getQuerySelections } from '../../helpers/default.helper'
import { ProjectMediaEntity } from './project-media.entity'
import { ProjectMedia } from '../../graphql'

@Resolver('ProjectMedia')
export class ProjectMediaResolver {
  /**
   * @constructor
   * @param {ProjectMediaService} _projectMediaService
   */
  constructor(private readonly _projectMediaService: ProjectMediaService) {}

  @Public()
  @Query('projectMedia')
  async projectMedia(@Args() args: any, @Info() info): Promise<ProjectMediaEntity[]> {
    return this._projectMediaService.find({
      select: getQuerySelections(info),
      ...args
    })
  }

  @Public()
  @Mutation('createProjectMedia')
  async createProjectMedia(@Args() args: ProjectMedia): Promise<boolean> {
    return this._projectMediaService.create(args)
  }
}
