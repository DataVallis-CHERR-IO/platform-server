import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectTypeService } from './project-type.service'
import { ProjectTypeResolver } from './project-type.resolver'
import { ProjectTypeSchema } from './project-type.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ProjectType',
        schema: ProjectTypeSchema,
        collection: 'ProjectType'
      }
    ])
  ],
  providers: [ProjectTypeService, ProjectTypeResolver],
  exports: [ProjectTypeService]
})
export class ProjectTypeModule {}
