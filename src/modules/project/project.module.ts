import { Module } from '@nestjs/common'
import { ProjectService } from './project.service'
import { ProjectResolver } from './project.resolver'
import { PubSubModule } from '../pub-sub.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectEntity } from './project.entity'
import { ProjectProjectTypeModule } from '../project-project-type/project-project-type.module'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity]), PubSubModule, ProjectProjectTypeModule],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService]
})
export class ProjectModule {}
