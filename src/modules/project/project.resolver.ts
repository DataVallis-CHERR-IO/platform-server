import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectService } from './project.service'
import { Project } from './project.model'
import { getQuerySelections } from '../../helpers/default.helper'
import { PubSub } from 'graphql-subscriptions'

// const pubSub = new PubSub()

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
  async projects(@Args() args: any, @Info() info): Promise<Project[]> {
    return await this._projectService.get({
      select: getQuerySelections(info),
      ...args
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
    const project = await this._projectService.create({ args })
    this._pubSub.publish('projectCreated', { projectCreated: project })

    return project
  }

  @Public()
  @Subscription('projectCreated')
  projectCreated() {
    return this._pubSub.asyncIterator('projectCreated')
  }
}
