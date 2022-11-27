import { networkOptions } from './src/config/default.config'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import * as dotenv from 'dotenv'

dotenv.config({
  path: './src/config/env/dev.env'
})

const config = {
  paths: {
    artifacts: './src/web3/artifacts',
    cache: './src/web3/cache',
    sources: './src/web3/contracts'
  },
  solidity: '0.8.17',
  networks: {
    mumbai: {
      url: networkOptions.url,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
}

export default config
