import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectDocumentSchema } from './project-document.schema'
import { ProjectDocumentService } from './project-document.service'
import { ProjectDocumentResolver } from './project-document.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ProjectDocument',
        schema: ProjectDocumentSchema,
        collection: 'ProjectDocument'
      }
    ])
  ],
  providers: [ProjectDocumentService, ProjectDocumentResolver],
  exports: [ProjectDocumentService]
})
export class ProjectDocumentModule {}
