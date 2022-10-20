import { Injectable } from '@nestjs/common'
import { IUploadReq, IUploadRes } from '../../interfaces/graphql/graphql.interface'
import { ipfsHeaders } from '../../config/default.config'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class UploadService {
  /**
   * @constructor
   * @param {HttpService} _httpService
   */
  constructor(private readonly _httpService: HttpService) {}

  /**
   * @method upload
   * @param {IUploadReq} upload
   * @returns {Promise<IUploadRes>}
   */
  upload = async (upload: IUploadReq): Promise<IUploadRes> =>
    (
      await this._httpService.axiosRef.post(
        process.env.IPFS_UPLOAD_URL,
        [
          {
            path: `media/${upload.title}`,
            content: upload.content
          }
        ],
        { ...ipfsHeaders }
      )
    ).data[0].path
}
