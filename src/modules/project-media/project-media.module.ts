import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectMediaSchema } from './project-media.schema'
import { ProjectMediaService } from './project-media.service'
import { ProjectMediaResolver } from './project-media.resolver'
import { UploadModule } from '../upload/upload.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ProjectMedia',
        schema: ProjectMediaSchema,
        collection: 'ProjectMedia'
      }
    ]),
    UploadModule
  ],
  providers: [ProjectMediaService, ProjectMediaResolver],
  exports: [ProjectMediaService]
})
export class ProjectMediaModule {}
