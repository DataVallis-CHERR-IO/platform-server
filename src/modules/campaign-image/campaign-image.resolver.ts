import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { CampaignImageService } from './campaign-image.service'
import { CampaignImage } from './campaign-image.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('CampaignImage')
export class CampaignImageResolver {
  /**
   * @constructor
   * @param {CampaignImageService} _campaignImageService
   */
  constructor(private readonly _campaignImageService: CampaignImageService) {}

  @Public()
  @Query('campaignImages')
  async campaignImages(@Args() args: any, @Info() info): Promise<CampaignImage[]> {
    return this._campaignImageService.getBy({
      args,
      select: getQuerySelections(info)
    })
  }
}
