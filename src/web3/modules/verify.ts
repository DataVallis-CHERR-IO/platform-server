import * as hre from 'hardhat'

export const verify = async (address: string, constructorArguments: any[] = []): Promise<string> => {
  try {
    console.log('Verifying contract...')
    await hre.run('verify:verify', {
      address,
      constructorArguments
    })

    return `${process.env.NETWORK_EXPLORER_URL}${address}#code`
  } catch (error) {
    return error.message
  }
}
