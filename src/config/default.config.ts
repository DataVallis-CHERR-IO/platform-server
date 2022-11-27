import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { translate } from '../utils/translate'
import { IBTFSConfig, IContractOptions, IDatetimeOptions, INetworkOptions, ITemplateConfig } from '../interfaces/default.interface'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { GraphQLError } from 'graphql/error'
import { IGraphQLErrorException } from '../interfaces/graphql/graphql.interface'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { WinstonModuleOptions } from 'nest-winston'
import * as moment from 'moment'
import * as winston from 'winston'

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
    subject: `${moment().format(process.env.DATETIME_FORMAT)}: ${translate('globalExceptionSubject')}`
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
  level: 'warn',
  transports: [
    new winston.transports.File({
      filename: join(process.cwd(), 'src/logs/logs.log')
    })
  ]
}

export const contractOptions: IContractOptions = {
  projectActivator: {
    address: '0x2A8A0532aAe8D55FC07AF723d5b0693ffB06Ea15',
    numActivators: 2,
    activationPercentage: 10
  }
}

export const networkOptions: INetworkOptions = {
  url: 'https://polygon-mumbai.infura.io/v3/dc6a2af74f2a4b3bb7cf1e2af4445434',
  explorerUrl: 'https://mumbai.polygonscan.com/address/',
  httpsProvider: 'https://snowy-holy-reel.matic-testnet.discover.quiknode.pro/e29148ae456d63b706b51806d8a3c41f5a4609c6/',
  wssProvider: 'wss://snowy-holy-reel.matic-testnet.discover.quiknode.pro/e29148ae456d63b706b51806d8a3c41f5a4609c6/'
}

export const btfsConfig: IBTFSConfig = {
  url: 'https://api.datavallis.com/v1',
  authHeaders: {
    headers: {
      'API-KEY': process.env.BTFS_API_KEY,
      'Content-Type': 'application/json'
    }
  },
  uploadHeaders: {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
}
