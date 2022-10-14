import hre from 'hardhat'

async function verify() {
  // const { address } = contract;
  // if (hre.network.config.chainId === 31337 || !hre.config.etherscan.apiKey) {
  //   return; // contract is deployed on local network or no apiKey is configured
  // }
  // const contract = await hre.ethers.getContractAt("FundRaising", "0xE5014d07B097e0d54636017cc121d796bc4af1EE");
  // const { address } = contract;
  // console.log("Waiting 5 block confirmations...");
  // console.log("Address", address);
  // await contract.deployTransaction.wait(5); // needed if verifyContract() is called immediately after deployment
  try {
    console.log('Verifying contract...')
    await hre.run('verify:verify', {
      address: '0xF7064e4771d38EA889De93750C7B0D9f3F4Fdd8A',
      constructorArguments: ['0xEEB4Eb7942E4B64427f2Fd3f4a3a20fE5464Be1F']
    })
  } catch (err) {
    console.log(err)
    if (err.message.includes('Reason: Already Verified')) {
      console.log('Contract is already verified!')
    }
  }
}

verify()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
