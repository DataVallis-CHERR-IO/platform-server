import { IUploadReq } from '../../interfaces/graphql/graphql.interface'
import { Injectable } from '@nestjs/common'
import { pollinationX } from '@pollinationx/core'
import * as _ from 'lodash'

@Injectable()
export class UploadService {
  /**
   * @constructor
   */
  constructor() {
    pollinationX.init({
      url: process.env.POLLINATIONX_URL,
      token: process.env.POLLINATIONX_TOKEN
    })
  }

  /**
   * @method upload
   * @param {IUploadReq} upload
   * @returns {Promise<string>}
   */
  upload = async (upload: IUploadReq): Promise<string> => {
    try {
      const hash = await pollinationX.upload(
        _.get(upload, 'isObject', false) ? Buffer.from(upload.content) : Buffer.from(upload.content.split(';base64,').pop(), 'base64'),
        upload.title + upload.extension
      )
      return `${process.env.BTFS_PUBLIC_URL}${hash}`
    } catch (error) {
      return null
    }
  }
}
