import { Module } from '@nestjs/common'
import { ProjectMediaService } from './project-media.service'
import { ProjectMediaResolver } from './project-media.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectMediaEntity } from './project-media.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectMediaEntity])],
  providers: [ProjectMediaService, ProjectMediaResolver],
  exports: [ProjectMediaService]
})
export class ProjectMediaModule {}
