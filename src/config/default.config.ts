import { translate } from '../utils/translate';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import * as moment from 'moment';
import { ITemplateConfig } from '../interfaces/default.interface';

export const nodemailerConfig: SMTPTransport | SMTPTransport.Options | string =
  {
    host: process.env.MAILER_HOST,
    port: Number(process.env.MAILER_PORT),
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  };

export const nodemailerOptions = {
  mailOptions: {
    subject: `${moment().format(process.env.DATETIME_FORMAT)}: ${translate(
      'globalExceptionSubject',
    )}`,
  } as Mail.Options,
  asHtml: true,
};

export const tedisConfig = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS,
};

export const templateConfig: ITemplateConfig = {
  email: {
    globalException: 'emails/global-exception',
    accountVerification: 'emails/account-verification',
  },
};
