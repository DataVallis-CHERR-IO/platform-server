import * as hre from 'hardhat'
import { verify } from './verify'

export const deploy = async () => {
  try {
    const constructorArguments = []
    // const constructorArguments = [30, '20000000000000000']
    // const contractFactory = await hre.ethers.getContractFactory('CherrioProject')
    const contractFactory = await hre.ethers.getContractFactory('CherrioProjectActivator')
    const contract = await contractFactory.deploy(...constructorArguments) //40320 = 1 week in blocks 40320 "20000000000000000"

    await contract.deployed()
    console.log('Contract deployed to:', contract.address)
    console.log('Waiting for 5 confirmations...')
    await contract.deployTransaction.wait(5)
    await verify(contract.address, constructorArguments)
    console.log('Successfully deployed and verified')
  } catch (error) {
    console.log(error.message)
  }
}

deploy()
  .then(() => process.exit(0))
  .catch(() => {
    process.exit(1)
  })
