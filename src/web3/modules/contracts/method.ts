import { getCherrioProjectActivatorAbi } from '../../abi/cherrio-project-activator'
import { contractOptions, networkOptions } from '../../../config/default.config'
import * as ethers from 'ethers'

export const method = async (method: string, args: any[]) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(networkOptions.httpsProvider)
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const contract = await new ethers.Contract(contractOptions.projectActivator.address, getCherrioProjectActivatorAbi(), signer)
    await contract[method](...args)

    return true
  } catch (error) {
    return false
  }
}
