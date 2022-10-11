import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ErrorException } from '../exceptions/error.exception'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { DecoratorEnum } from '../enums/decorator.enum'

@Injectable()
export class GraphqlAuthGuard extends AuthGuard('jwt') implements CanActivate {
  /**
   * @constructor
   * @param {Reflector} _reflector
   */
  constructor(private _reflector: Reflector) {
    super()
  }

  /**
   * @method getRequest
   * @param {ExecutionContext} context
   * @returns {any}
   */
  getRequest = (context: ExecutionContext): any => GqlExecutionContext.create(context).getContext().req

  /**
   * @method canActivate
   * @param {ExecutionContext} context
   * @returns {boolean | Promise<boolean> | Observable<boolean>}
   */
  canActivate = (context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> => {
    if (this._reflector.get<boolean>(DecoratorEnum.PUBLIC, context.getHandler())) {
      return true
    }

    GqlExecutionContext.create(context)
    return super.canActivate(context)
  }

  /**
   * @method handleRequest
   * @param {any} err
   * @param {any} user
   * @param {any} info
   * @returns {any}
   * @throws {ErrorException}
   */
  handleRequest = (err: any, user: any, info: any): any => {
    if (err || !user) {
      throw new ErrorException({
        name: info.name,
        message: info.message
      })
    }

    return user
  }
}
