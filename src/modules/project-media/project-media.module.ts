import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectMediaSchema } from './project-media.schema'
import { ProjectMediaService } from './project-media.service'
import { ProjectMediaResolver } from './project-media.resolver'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5
      })
    }),
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
