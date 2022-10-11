import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CampaignDetailSchema } from './campaign-detail.schema'
import { CampaignDetailService } from './campaign-detail.service'
import { CampaignDetailResolver } from './campaign-detail.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'CampaignDetail',
        schema: CampaignDetailSchema,
        collection: 'CampaignDetail'
      }
    ])
  ],
  providers: [CampaignDetailService, CampaignDetailResolver],
  exports: [CampaignDetailService]
})
export class CampaignDetailModule {}
