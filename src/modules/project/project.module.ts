import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectSchema } from './project.schema'
import { ProjectService } from './project.service'
import { ProjectResolver } from './project.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Project',
        schema: ProjectSchema,
        collection: 'Project'
      }
    ])
  ],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService]
})
export class ProjectModule {}
