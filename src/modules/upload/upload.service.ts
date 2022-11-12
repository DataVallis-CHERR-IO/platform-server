import { Injectable } from '@nestjs/common'
import { IUploadReq } from '../../interfaces/graphql/graphql.interface'
import { btfsAuthHeaderConfig, btfsUploadHeaderConfig } from '../../config/default.config'
import { HttpService } from '@nestjs/axios'
import * as FormData from 'form-data'
import * as _ from 'lodash'

@Injectable()
export class UploadService {
  private _token: string

  /**
   * @constructor
   * @param {HttpService} _httpService
   */
  constructor(private readonly _httpService: HttpService) {
    this._httpService.axiosRef
      .post(
        `${process.env.BTFS_URL}/auth/login`,
        {
          email: process.env.BTFS_EMAIL,
          password: process.env.BTFS_PASSWORD
        },
        { ...btfsAuthHeaderConfig }
      )
      .then(response => (this._token = response.data.data.token))
      .catch(() => {})
  }

  /**
   * @method upload
   * @param {IUploadReq} upload
   * @returns {Promise<string>}
   */
  upload = async (upload: IUploadReq): Promise<string> => {
    try {
      const buffer = _.get(upload, 'isObject', false) ? Buffer.from(upload.content) : Buffer.from(upload.content.split(';base64,').pop(), 'base64')
      const formData = new FormData()
      formData.append('file', buffer, upload.title + upload.extension)

      const response = (
        await this._httpService.axiosRef.post(`${process.env.BTFS_URL}/storage/btfs`, formData, {
          headers: { token: this._token, ...btfsUploadHeaderConfig.headers }
        })
      ).data

      return response.data.PublicUrl
    } catch (error) {
      return null
    }
  }
}
