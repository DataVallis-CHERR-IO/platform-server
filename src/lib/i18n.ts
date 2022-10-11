import { join } from 'path'
import * as i18n from 'i18n'

i18n.configure({
  locales: ['en', 'si'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: join(process.cwd(), `src/locales`),
  api: {
    __: 'translate',
    __n: 'translateN'
  }
})

export default i18n
