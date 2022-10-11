import * as i18n from 'i18n'

export class LocaleService {
  private readonly _i18n: i18n

  /**
   * @constructor
   * @param {i18n} i18n
   */
  constructor(i18n: i18n) {
    this._i18n = i18n
  }

  /**
   * @method getCurrentLocale
   * @returns {string}
   */
  getCurrentLocale = (): string => this._i18n.getLocale()

  /**
   * @method getLocales
   * @returns {string[]}
   */
  getLocales = (): string[] => this._i18n.getLocales()

  /**
   * @method setLocale
   * @param {string} locale
   */
  setLocale = (locale: string): void => {
    if (this.getLocales().indexOf(locale) !== -1) {
      this._i18n.setLocale(locale)
    }
  }

  /**
   * @method translate
   * @param {string} key
   * @param {any} args
   * @returns {string}
   */
  translate = (key: string, args = undefined): string => this._i18n.__(key, args)
}
