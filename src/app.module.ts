import * as winston from 'winston'
import { join } from 'path'
import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLError } from 'graphql'
import { IGraphQLErrorException } from './interfaces/graphql/graphql.interface'
import { APP_FILTER, APP_GUARD } from '@nestjs/core'
import { GraphqlAuthGuard } from './guards/graphql-auth.guard'
import { JwtStrategy } from './strategies/jwt.strategy'
import { PassportModule } from '@nestjs/passport'
import { GlobalExceptionFilter } from './filters/global-exception.filter'
import { WinstonModule } from 'nest-winston'
import { HttpModule, HttpService } from '@nestjs/axios'
import { SubscriberModule } from './modules/subscriber/subscriber.module'
import { ProjectModule } from './modules/project/project.module'
import { ProjectDetailModule } from './modules/project-detail/project-detail.module'
import { ProjectDocumentModule } from './modules/project-document/project-document.module'
import { ProjectMediaModule } from './modules/project-media/project-media.module'
import { ProjectTypeModule } from './modules/project-type/project-type.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
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
    }),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`),
    WinstonModule.forRoot({
      level: process.env.LOGGER_LEVEL,
      transports: [
        new winston.transports.File({
          filename: join(process.cwd(), process.env.LOGGER_PATH)
        })
      ]
    }),
    PassportModule,
    SubscriberModule,
    ProjectTypeModule,
    ProjectModule,
    ProjectDetailModule,
    ProjectDocumentModule,
    ProjectMediaModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: GraphqlAuthGuard
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter
    },
    JwtStrategy,
    Logger
  ]
})
export class AppModule {}
