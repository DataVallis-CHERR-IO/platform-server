import * as TronWeb from 'tronweb'
import { Injectable } from '@nestjs/common'
import { send } from '../../../web3/modules/send'
import { StatusEnum } from '../../../enums/status.enum'

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
        TronWeb.toSun((Number(args.goal) * Number(process.env.CONTRACT_CHERRIO_PROJECT_ACTIVATOR_ACTIVATION_PERCENTAGE)) / 100),
        Number(process.env.CONTRACT_CHERRIO_PROJECT_ACTIVATOR_NUM_ACTIVATORS),
        StatusEnum.ACTIVE
      ])

      return true
    } catch (error) {
      return false
    }
  }
}
