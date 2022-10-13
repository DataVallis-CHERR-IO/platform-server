import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectSchema } from './project.schema'
import { ProjectService } from './project.service'
import { ProjectResolver } from './project.resolver'
import { PubSubModule } from '../pub-sub.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Project',
        schema: ProjectSchema,
        collection: 'Project'
      }
    ]),
    PubSubModule
  ],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService]
})
export class ProjectModule {}
