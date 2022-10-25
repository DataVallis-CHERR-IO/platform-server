import * as ethers from 'ethers'
import { getCherrioProjectActivatorAbi } from '../../abi/cherrio-project-activator'

export const method = async (method: string, args: any[]) => {
  try {
    console.log(args)
    const provider = new ethers.providers.JsonRpcProvider(process.env.HTTPS_PROVIDER)
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const contract = await new ethers.Contract(process.env.CONTRACT_CHERRIO_PROJECT_ACTIVATOR_ADDRESS, getCherrioProjectActivatorAbi(), signer)
    await contract[method](...args)

    return true
  } catch (error) {
    console.log(error.message)
    return false
  }
}
