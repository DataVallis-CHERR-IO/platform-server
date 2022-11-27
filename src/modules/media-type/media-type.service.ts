import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MediaTypeEntity } from './media-type.entity'
import { BaseService } from '../base.service'

@Injectable()
export class MediaTypeService extends BaseService<MediaTypeEntity> {
  /**
   * @constructor
   * @param {Repository<MediaTypeEntity>} _mediaTypeEntityRepository
   */
  constructor(
    @InjectRepository(MediaTypeEntity)
    private readonly _mediaTypeEntityRepository: Repository<MediaTypeEntity>
  ) {
    super(_mediaTypeEntityRepository)
  }
}
