import { Module } from '@nestjs/common'
import { MediaTypeService } from './media-type.service'
import { MediaTypeResolver } from './media-type.resolver'
import { MediaTypeEntity } from './media-type.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([MediaTypeEntity])],
  providers: [MediaTypeService, MediaTypeResolver],
  exports: [MediaTypeService]
})
export class MediaTypeModule {}
