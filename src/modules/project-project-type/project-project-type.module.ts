import { Module } from '@nestjs/common'
import { ProjectProjectTypeService } from './project-project-type.service'
import { ProjectProjectTypeResolver } from './project-project-type.resolver'
import { ProjectProjectTypeEntity } from './project-project-type.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectProjectTypeEntity])],
  providers: [ProjectProjectTypeService, ProjectProjectTypeResolver],
  exports: [ProjectProjectTypeService]
})
export class ProjectProjectTypeModule {}
