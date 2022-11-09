import { GraphQLFormattedError } from 'graphql/error'
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral'
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions'
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere'
import { FindOptionsOrder } from 'typeorm/find-options/FindOptionsOrder'

export interface IGraphQLErrorException extends GraphQLFormattedError {
  lkMessage?: string
  name?: string
}

export interface ICommonRes {
  message: string
  lkMessage: string
}

export interface IQueryOptions<Entity extends ObjectLiteral> {
  select?: FindManyOptions<Entity>
  where?: FindOptionsWhere<Entity>[] | FindOptionsWhere<Entity>
  order?: FindOptionsOrder<Entity>
}

export interface IUploadReq {
  title: string
  extension?: string
  content: string
  isObject?: boolean
}
