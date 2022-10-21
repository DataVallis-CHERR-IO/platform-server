import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { GraphqlAuthGuard } from './guards/graphql-auth.guard'
import { GlobalExceptionFilter } from './filters/global-exception.filter'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { Logger } from '@nestjs/common'
import * as bodyParser from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
  app.useGlobalGuards(new GraphqlAuthGuard(app.get(Reflector)))
  app.useGlobalFilters(new GlobalExceptionFilter(app.get(Logger)))
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  await app.listen(process.env.HTTP_PORT)
}

bootstrap()
