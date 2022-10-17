import * as hre from 'hardhat'

export const deploy = async () => {
  // const contractFactory = await hre.ethers.getContractFactory('CherrioProject')
  // const contract = await contractFactory.deploy(40320, 100000000) //40320 = 1 week in blocks
  const contractFactory = await hre.ethers.getContractFactory('CherrioProjectLock')
  const contract = await contractFactory.deploy() //40320 = 1 week in blocks

  await contract.deployed()
  console.log('Contract deployed to: ', contract.address)
}

deploy()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
