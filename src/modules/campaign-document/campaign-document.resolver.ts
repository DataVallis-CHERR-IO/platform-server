import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { CampaignDocumentService } from './campaign-document.service'
import { CampaignDocument } from './campaign-document.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('CampaignDocument')
export class CampaignDocumentResolver {
  /**
   * @constructor
   * @param {CampaignDocumentService} _campaignDocumentService
   */
  constructor(private readonly _campaignDocumentService: CampaignDocumentService) {}

  @Public()
  @Query('campaignDocuments')
  async campaignDocuments(@Args() args: any, @Info() info): Promise<CampaignDocument[]> {
    return this._campaignDocumentService.getBy({
      args,
      select: getQuerySelections(info)
    })
  }
}
