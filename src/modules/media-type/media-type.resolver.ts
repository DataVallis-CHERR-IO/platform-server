import { Info, Query, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { getQuerySelections } from '../../helpers/default.helper'
import { MediaTypeService } from './media-type.service'
import { MediaTypeEntity } from './media-type.entity'

@Resolver('MediaType')
export class MediaTypeResolver {
  /**
   * @constructor
   * @param {MediaTypeService} _mediaTypeService
   */
  constructor(private readonly _mediaTypeService: MediaTypeService) {}

  @Public()
  @Query('mediaTypes')
  async mediaTypes(@Info() info): Promise<MediaTypeEntity[]> {
    return this._mediaTypeService.find({
      select: getQuerySelections(info)
    })
  }
}
