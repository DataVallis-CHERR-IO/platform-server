import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { CampaignDetailService } from './campaign-detail.service'
import { CampaignDetail } from './campaign-detail.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('CampaignDetail')
export class CampaignDetailResolver {
  /**
   * @constructor
   * @param {CampaignDetailService} _campaignDetailService
   */
  constructor(private readonly _campaignDetailService: CampaignDetailService) {}

  @Public()
  @Query('campaignDetail')
  async campaignDetail(@Args() args: any, @Info() info): Promise<CampaignDetail> {
    return this._campaignDetailService.getBy({
      args,
      select: getQuerySelections(info)
    })
  }
}
