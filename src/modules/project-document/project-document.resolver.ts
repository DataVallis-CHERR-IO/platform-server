import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { ProjectDocumentService } from './project-document.service'
import { ProjectDocument } from './project-document.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('ProjectDocument')
export class ProjectDocumentResolver {
  /**
   * @constructor
   * @param {ProjectDocumentService} _projectDocumentService
   */
  constructor(private readonly _projectDocumentService: ProjectDocumentService) {}

  @Public()
  @Query('projectDocuments')
  async projectDocuments(@Args() args: any, @Info() info): Promise<ProjectDocument[]> {
    return this._projectDocumentService.getBy({
      select: getQuerySelections(info),
      args
    })
  }
}
