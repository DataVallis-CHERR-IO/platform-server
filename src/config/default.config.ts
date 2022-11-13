import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { translate } from '../utils/translate'
import {
  IBTFSAuthHeaderConfig,
  IBTFSUploadHeaderConfig,
  IContractProjectActivatorOptions,
  IDatetimeOptions,
  ITemplateConfig,
  ITronNetworkOptions
} from '../interfaces/default.interface'
import * as moment from 'moment'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { GraphQLError } from 'graphql/index'
import { IGraphQLErrorException } from '../interfaces/graphql/graphql.interface'
import * as winston from 'winston'
import { WinstonModuleOptions } from 'nest-winston'

export const datetimeOptions: IDatetimeOptions = {
  format: 'YYYY-MM-DD HH:mm:ss'
}

export const graphQLConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
  installSubscriptionHandlers: true,
  subscriptions: {
    'graphql-ws': true,
    'subscriptions-transport-ws': true
  },
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class'
  },
  context: ({ req, res }) => ({ req, res }),
  formatError: (graphQLError: GraphQLError) =>
    ({
      name: graphQLError.name,
      message: graphQLError.message
    } as IGraphQLErrorException)
}

export const nodemailerConfig: SMTPTransport | SMTPTransport.Options | string = {
  host: process.env.MAILER_HOST,
  port: Number(process.env.MAILER_PORT),
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD
  }
}

export const nodemailerOptions = {
  mailOptions: {
    subject: `${moment().format(datetimeOptions.format)}: ${translate('globalExceptionSubject')}`
  } as Mail.Options,
  asHtml: true
}

export const tedisConfig = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS
}

export const templateConfig: ITemplateConfig = {
  email: {
    globalException: 'emails/global-exception',
    accountVerification: 'emails/account-verification'
  }
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: !!Number(process.env.DB_SYNCHRONIZE),
  entities: [__dirname + '/../**/*.entity{.ts,.js}']
}

export const winstonConfig: WinstonModuleOptions = {
  level: process.env.LOGGER_LEVEL,
  transports: [
    new winston.transports.File({
      filename: join(process.cwd(), process.env.LOGGER_PATH)
    })
  ]
}

export const contractProjectActivatorOptions: IContractProjectActivatorOptions = {
  address: 'TAoNHeBQMWU8pxqhbdNT59hAkjDnSoxVPV',
  numActivators: 2,
  activationPercentage: 10
}

export const tronNetworkOptions: ITronNetworkOptions = {
  provider: 'https://nile.trongrid.io'
}

export const btfsAuthHeaderConfig: IBTFSAuthHeaderConfig = {
  headers: {
    'API-KEY': process.env.BTFS_API_KEY,
    'Content-Type': 'application/json'
  }
}

export const btfsUploadHeaderConfig: IBTFSUploadHeaderConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
