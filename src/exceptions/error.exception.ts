import { HttpException, HttpStatus } from '@nestjs/common'
import { IGraphQLErrorException } from '../interfaces/graphql/graphql.interface'

export class ErrorException extends HttpException {
  /**
   * @constructor
   * @param {string | IGraphQLErrorException>} response
   * @param {number} code
   */
  constructor(response: string | IGraphQLErrorException, code: number = HttpStatus.BAD_REQUEST) {
    super(response, code)
  }
}
