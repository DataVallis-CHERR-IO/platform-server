import { nodemailerConfig } from '../config/default.config'
import * as nodemailer from 'nodemailer'

/**
 * @function mailer
 * @returns {Transporter<SMTPTransport.SentMessageInfo>}
 */
export const mailer = nodemailer.createTransport(nodemailerConfig)
