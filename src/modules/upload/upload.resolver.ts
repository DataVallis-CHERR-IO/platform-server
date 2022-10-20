import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Public } from '../../decorators/public.decorator'
import { IUploadRes } from '../../interfaces/graphql/graphql.interface'
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
  async upload(@Args() args: any): Promise<IUploadRes> {
    return await this._uploadService.upload(args)
  }
}
