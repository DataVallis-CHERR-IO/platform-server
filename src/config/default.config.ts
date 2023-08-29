import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { translate } from '../utils/translate'
import { IContractOptions, IDatetimeOptions, INetworkOptions, ITemplateConfig } from '../interfaces/default.interface'
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
    subject: `${moment().format('YYYY-MM-DD HH:mm:ss')}: ${translate('globalExceptionSubject')}`
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
    address: '0x8D41ccf877b06BC9EE4C861286C9913176BA7F18',
    numActivators: 2,
    activationPercentage: 10
  }
}

export const networkOptions: INetworkOptions = {
  explorerUrl: 'https://goerli.etherscan.io/address/',
  httpsProvider: 'https://goerli.infura.io/v3/9e4165a8806947a08e67ec27c5039607',
  wssProvider: 'wss://goerli.infura.io/ws/v3/9e4165a8806947a08e67ec27c5039607'
}
