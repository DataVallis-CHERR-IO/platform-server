import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectService } from './project.service'
import { Project } from './project.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('Project')
export class ProjectResolver {
  /**
   * @constructor
   * @param {ProjectService} _projectService
   */
  constructor(private readonly _projectService: ProjectService) {}

  @Public()
  @Query('projects')
  async projects(@Info() info): Promise<Project[]> {
    return await this._projectService.get({
      select: getQuerySelections(info)
    })
  }

  @Public()
  @Query('project')
  async project(@Args() args: any, @Info() info): Promise<Project> {
    return this._projectService.getBy({
      args,
      select: getQuerySelections(info)
    })
  }

  @Public()
  @Mutation('createProject')
  async createProject(@Args() args: any): Promise<Project> {
    return this._projectService.create({
      args
    })
  }
}
