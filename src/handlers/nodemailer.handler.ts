import { nodemailerOptions } from '../config/default.config'
import { mailer } from '../lib/nodemailer'
import { logger } from '../lib/logger'

/**
 * @function sendMail
 * @param {string} to
 * @param {string} text
 * @param {string} subject
 * @param {boolean} asHtml
 * @returns {Promise<boolean>}
 */
export const sendMail = async (to: string, text: string, subject?: string, asHtml?: boolean): Promise<boolean> => {
  return new Promise(resolve => {
    const mailOptions = nodemailerOptions.mailOptions
    mailOptions.from = process.env.MAILER_USERNAME
    mailOptions.to = to
    asHtml || nodemailerOptions.asHtml ? (mailOptions.html = text) : (mailOptions.text = text)

    !subject || (mailOptions.subject = subject)

    mailer.sendMail(mailOptions, (error: Error) => {
      if (error) {
        logger.error(`Mailer error: ${error.message}`)

        return resolve(false)
      }

      resolve(true)
    })
  })
}
