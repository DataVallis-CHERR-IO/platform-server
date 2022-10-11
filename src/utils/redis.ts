import { tedis } from '../lib/tedis'

export const Redis = {
  /**
   * @function getset
   * @param {string} key
   * @param {any} callback
   * @returns {Promise<string | number>}
   */
  async getset(key: string, callback: any): Promise<any> {
    const data: any = await tedis.get(key)

    if (!data) {
      await tedis.set(key, JSON.stringify(await callback()))
      return this.getset(key, callback)
    }

    return JSON.parse(data)
  }
}
