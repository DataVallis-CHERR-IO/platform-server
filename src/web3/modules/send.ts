import * as TronWeb from 'tronweb'

const HttpProvider = TronWeb.providers.HttpProvider
const tronWeb = new TronWeb(
  new HttpProvider(process.env.TRON_PROVIDER),
  new HttpProvider(process.env.TRON_PROVIDER),
  new HttpProvider(process.env.TRON_PROVIDER),
  process.env.TRON_PRIVATE_KEY
)

export const send = async (
  method: string,
  parameters: any[],
  contractAddress: string = process.env.CONTRACT_CHERRIO_PROJECT_ACTIVATOR_ADDRESS
): Promise<any> => {
  try {
    return (await tronWeb.contract().at(contractAddress))[method](...parameters).send()
  } catch (error) {
    return null
  }
}
