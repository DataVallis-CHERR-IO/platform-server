import * as TronWeb from 'tronweb'
import { Injectable } from '@nestjs/common'
import { send } from '../../../web3/modules/send'
import { StatusEnum } from '../../../enums/status.enum'
import { contractProjectActivatorOptions } from '../../../config/default.config'

@Injectable()
export class ContractCherrioProjectActivatorService {
  /**
   * @method newProject
   * @param {any} args
   * @returns {Promise<boolean>}
   */
  newProject = async (args: any): Promise<boolean> => {
    try {
      await send('newProject', [
        args.contractAddress,
        TronWeb.toSun((Number(args.goal) * contractProjectActivatorOptions.activationPercentage) / 100),
        contractProjectActivatorOptions.numActivators,
        StatusEnum.ACTIVE
      ])

      return true
    } catch (error) {
      return false
    }
  }
}
