import { Module } from '@nestjs/common'
import { ProjectTypeService } from './project-type.service'
import { ProjectTypeResolver } from './project-type.resolver'
import { ProjectTypeEntity } from './project-type.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectTypeEntity])],
  providers: [ProjectTypeService, ProjectTypeResolver],
  exports: [ProjectTypeService]
})
export class ProjectTypeModule {}
