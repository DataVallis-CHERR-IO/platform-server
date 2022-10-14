import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectMediaSchema } from './project-media.schema'
import { ProjectMediaService } from './project-media.service'
import { ProjectMediaResolver } from './project-media.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ProjectMedia',
        schema: ProjectMediaSchema,
        collection: 'ProjectMedia'
      }
    ])
  ],
  providers: [ProjectMediaService, ProjectMediaResolver],
  exports: [ProjectMediaService]
})
export class ProjectMediaModule {}
