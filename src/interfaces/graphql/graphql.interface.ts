import { GraphQLFormattedError } from 'graphql/error'

export interface IGraphQLErrorException extends GraphQLFormattedError {
  lkMessage?: string
  name?: string
}

export interface ICommonRes {
  message: string
  lkMessage: string
}

type OrderDirection = 'ASC' | 'DESC'

interface ISort {
  orderBy: string
  orderDirection: OrderDirection
}

export interface IRequest {
  args?: any
  select?: string[]
  where?: any
  sort?: ISort
  skip?: number
  limit?: number
}

export interface IUploadReq {
  title: string
  extension?: string
  content: string
  isObject?: boolean
}
