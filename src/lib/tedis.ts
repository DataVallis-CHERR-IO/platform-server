import { Tedis } from 'tedis'
import { tedisConfig } from '../config/default.config'

/**
 * @function tedis
 * @returns {Tedis}
 */
export const tedis = new Tedis(tedisConfig)
