import { networkOptions } from '../../config/default.config'
import * as hre from 'hardhat'

export const verify = async (address: string, constructorArguments: any[] = []): Promise<string> => {
  try {
    console.log('Verifying contract...')
    await hre.run('verify:verify', {
      address,
      constructorArguments
    })

    return `${networkOptions.explorerUrl}${address}#code`
  } catch (error) {
    return error.message
  }
}
