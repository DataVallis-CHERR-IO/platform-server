import * as hre from 'hardhat'

export const deploy = async () => {
  const contractFactory = await hre.ethers.getContractFactory('CherrioProjectLock')
  const contract = await contractFactory.deploy("0xEEB4Eb7942E4B64427f2Fd3f4a3a20fE5464Be1F") //40320 = 1 week in blocks

  await contract.deployed()
  console.log('CherrioProjectTest deployed to:', contract.address)
}

deploy()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
