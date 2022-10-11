import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CampaignDocumentSchema } from './campaign-document.schema'
import { CampaignDocumentService } from './campaign-document.service'
import { CampaignDocumentResolver } from './campaign-document.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'CampaignDocument',
        schema: CampaignDocumentSchema,
        collection: 'CampaignDocument'
      }
    ])
  ],
  providers: [CampaignDocumentService, CampaignDocumentResolver],
  exports: [CampaignDocumentService]
})
export class CampaignDocumentModule {}
