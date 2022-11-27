import { Injectable } from '@nestjs/common'
import { StatusEnum } from '../../../enums/status.enum'
import { method } from '../../../web3/modules/contracts/method'
import { contractOptions } from '../../../config/default.config'
import * as ethers from 'ethers'

@Injectable()
export class ContractCherrioProjectActivatorService {
  /**
   * @method newProject
   * @param {any} args
   * @returns {Promise<boolean>}
   */
  newProject = async (args: any): Promise<boolean> => {
    try {
      return method('newProject', [
        args.contractAddress,
        ethers.utils.parseUnits(((Number(args.goal) * Number(contractOptions.projectActivator.activationPercentage)) / 100).toString(), 'ether').toString(),
        Number(contractOptions.projectActivator.numActivators),
        StatusEnum.ACTIVE
      ])
    } catch (error) {
      return false
    }
  }
}
