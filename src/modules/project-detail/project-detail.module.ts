import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectDetailSchema } from './project-detail.schema'
import { ProjectDetailService } from './project-detail.service'
import { ProjectDetailResolver } from './project-detail.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ProjectDetail',
        schema: ProjectDetailSchema,
        collection: 'ProjectDetail'
      }
    ])
  ],
  providers: [ProjectDetailService, ProjectDetailResolver],
  exports: [ProjectDetailService]
})
export class ProjectDetailModule {}
