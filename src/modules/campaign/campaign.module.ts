import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CampaignSchema } from './campaign.schema'
import { CampaignService } from './campaign.service'
import { CampaignResolver } from './campaign.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Campaign',
        schema: CampaignSchema,
        collection: 'Campaign'
      }
    ])
  ],
  providers: [CampaignService, CampaignResolver],
  exports: [CampaignService]
})
export class CampaignModule {}
