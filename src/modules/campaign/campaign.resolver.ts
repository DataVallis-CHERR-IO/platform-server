import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { CampaignService } from './campaign.service'
import { Campaign } from './campaign.model'
import { getQuerySelections } from '../../helpers/default.helper'

@Resolver('Campaign')
export class CampaignResolver {
  /**
   * @constructor
   * @param {CampaignService} _campaignService
   */
  constructor(private readonly _campaignService: CampaignService) {}

  @Public()
  @Query('campaigns')
  async campaigns(@Info() info): Promise<Campaign[]> {
    return await this._campaignService.get({
      select: getQuerySelections(info)
    })
  }

  @Public()
  @Query('campaign')
  async campaign(@Args() args: any, @Info() info): Promise<Campaign> {
    return this._campaignService.getBy({
      args,
      select: getQuerySelections(info)
    })
  }
}
