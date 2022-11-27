import { APP_FILTER, APP_GUARD } from '@nestjs/core'
import { graphQLConfig, typeOrmConfig, winstonConfig } from './config/default.config'
import { Logger, Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { GraphqlAuthGuard } from './guards/graphql-auth.guard'
import { JwtStrategy } from './strategies/jwt.strategy'
import { PassportModule } from '@nestjs/passport'
import { GlobalExceptionFilter } from './filters/global-exception.filter'
import { WinstonModule } from 'nest-winston'
import { ProjectModule } from './modules/project/project.module'
import { UploadModule } from './modules/upload/upload.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectTypeModule } from './modules/project-type/project-type.module'
import { MediaTypeModule } from './modules/media-type/media-type.module'
import { ProjectMediaModule } from './modules/project-media/project-media.module'
import { ContractCherrioProjectActivatorModule } from './modules/contracts/contract-cherrio-project-activator/contract-cherrio-project-activator.module'
import { SubscriberModule } from './modules/subscriber/subscriber.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(graphQLConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
    WinstonModule.forRoot(winstonConfig),
    PassportModule,
    UploadModule,
    ContractCherrioProjectActivatorModule,
    MediaTypeModule,
    ProjectTypeModule,
    ProjectModule,
    ProjectMediaModule,
    SubscriberModule
  ],
  controllers: [],
  providers: [
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
