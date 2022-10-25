import { Injectable } from '@nestjs/common'
import { method } from '../../../web3/modules/contracts/cherrio-project-activator'
import * as ethers from 'ethers'
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
      console.log(args)
      return method('newProject', [
        args.contractAddress,
        ethers.utils.parseUnits(args.goal.toString(), 'ether').toString(),
        Number(process.env.CONTRACT_CHERRIO_PROJECT_ACTIVATOR_NUM_ACTIVATORS),
        StatusEnum.ACTIVE
      ])
    } catch (error) {
      console.log(error)
      return false
    }
  }
}
