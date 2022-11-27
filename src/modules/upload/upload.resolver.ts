import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { UploadService } from './upload.service'

@Resolver('Upload')
export class UploadResolver {
  /**
   * @constructor
   * @param {UploadService} _uploadService
   */
  constructor(private readonly _uploadService: UploadService) {}

  @Public()
  @Mutation('upload')
  async upload(@Args() args: any): Promise<string> {
    return await this._uploadService.upload(args)
  }
}
