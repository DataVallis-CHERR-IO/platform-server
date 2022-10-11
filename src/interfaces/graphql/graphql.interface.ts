import { GraphQLFormattedError } from 'graphql/error'

export interface IGraphQLErrorException extends GraphQLFormattedError {
  lkMessage?: string
  name?: string
}

export interface ICommonRes {
  message: string
  lkMessage: string
}

export interface IRequest {
  args?: any
  select?: string[]
}
