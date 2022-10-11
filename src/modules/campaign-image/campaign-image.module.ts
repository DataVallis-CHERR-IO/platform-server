import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CampaignDocumentSchema } from './campaign-image.schema'
import { CampaignImageService } from './campaign-image.service'
import { CampaignImageResolver } from './campaign-image.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'CampaignImage',
        schema: CampaignDocumentSchema,
        collection: 'CampaignImage'
      }
    ])
  ],
  providers: [CampaignImageService, CampaignImageResolver],
  exports: [CampaignImageService]
})
export class CampaignImageModule {}
