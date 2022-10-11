import { IRenderTemplate } from '../interfaces/default.interface'
import { join } from 'path'
import { EncodingEnum } from '../enums/encoding.enum'
import * as fs from 'fs'
import * as _ from 'lodash'

/**
 * @function getQuerySelections
 * @param {any} info
 */
export const getQuerySelections = (info: any) => _.get(info, 'fieldNodes[0].selectionSet.selections', []).map(key => key?.name?.value)

/**
 * @function getRenderedTemplate
 * @param {string} path
 * @param {IRenderTemplate} data
 * @returns {string}
 */
export const getRenderedTemplate = (path: string, data: IRenderTemplate): string =>
  fs
    .readFileSync(join(process.cwd(), `src/templates/emails/base.template.html`), EncodingEnum.UTF8)
    .replace(/{{content}}/g, () =>
      fs
        .readFileSync(join(process.cwd(), `src/templates/${path}.template.html`), EncodingEnum.UTF8)
        .replace(/{{\s*(\w+?)\s*}}/g, (_: string, token: string) => data[token] || '')
    )
