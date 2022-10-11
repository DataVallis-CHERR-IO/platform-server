import { LocaleService } from '../services/locale.service'
import i18n from '../lib/i18n'

const localeService = new LocaleService(i18n)

/**
 * @function translate
 * @param {string} key
 * @param {any} args
 * @returns {string}
 */
export const translate = (key: string, args?: any) => localeService.translate(key, args)
