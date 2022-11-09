import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectService } from './project.service'
import { getQuerySelections } from '../../helpers/default.helper'
import { PubSub } from 'graphql-subscriptions'
import { ProjectEntity } from './project.entity'
import { Project } from '../../graphql'

@Resolver('Project')
export class ProjectResolver {
  /**
   * @constructor
   * @param {ProjectService} _projectService
   * @param {PubSub} _pubSub
   */
  constructor(private readonly _projectService: ProjectService, private _pubSub: PubSub) {}

  @Public()
  @Query('projects')
  async projects(@Args() args: any, @Info() info): Promise<ProjectEntity[]> {
    return this._projectService.find({
      select: getQuerySelections(info),
      ...args
    })
  }

  @Public()
  @Query('project')
  async project(@Args() args: any, @Info() info): Promise<ProjectEntity> {
    return this._projectService.findOne({
      select: getQuerySelections(info),
      ...args
    })
  }

  @Public()
  @Mutation('createProject')
  async createProject(@Args() args: Project): Promise<ProjectEntity> {
    const project = await this._projectService.create(args)
    this._pubSub.publish('projectCreated', { projectCreated: project })

    return project
  }

  @Public()
  @Subscription('projectCreated')
  projectCreated() {
    return this._pubSub.asyncIterator('projectCreated')
  }
}
