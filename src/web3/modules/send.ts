import * as TronWeb from 'tronweb'
import { contractProjectActivatorOptions, tronNetworkOptions } from '../../config/default.config'

const HttpProvider = TronWeb.providers.HttpProvider
const tronWeb = new TronWeb(
  new HttpProvider(tronNetworkOptions.provider),
  new HttpProvider(tronNetworkOptions.provider),
  new HttpProvider(tronNetworkOptions.provider),
  process.env.TRON_PRIVATE_KEY
)

export const send = async (method: string, parameters: any[], contractAddress: string = contractProjectActivatorOptions.address): Promise<any> => {
  try {
    return (await tronWeb.contract().at(contractAddress))[method](...parameters).send()
  } catch (error) {
    return null
  }
}
