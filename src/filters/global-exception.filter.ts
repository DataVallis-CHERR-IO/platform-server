import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Inject, Logger } from '@nestjs/common'
import { ErrorException } from '../exceptions/error.exception'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { parse } from 'graphql'
import { sendMail } from '../handlers/nodemailer.handler'
import { getRenderedTemplate } from '../helpers/default.helper'
import { templateConfig } from '../config/default.config'
import * as _ from 'lodash'

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  /**
   * @constructor
   * @param {Logger} _logger
   */
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly _logger: Logger
  ) {}

  /**
   * @method catch
   * @param {any} exception
   * @param {ArgumentsHost} argumentsHost
   * @returns {Promise<never>}
   * @throws {ErrorException}
   */
  catch = async (exception: any, argumentsHost: ArgumentsHost): Promise<never> => {
    const context = argumentsHost.switchToRpc().getContext()
    const query = _.get(argumentsHost.getArgs(), '[2].req.body.query', '')
    const queryObject = JSON.stringify(parse(query)) || ''
    const message = exception?.getResponse()?.message || exception?.message || exception?.message?.error
    const lkMessage = exception?.response?.lkMessage || null
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR
    const data = {
      message,
      context: JSON.stringify(context),
      query,
      queryObject
    }

    await sendMail(process.env.MAILER_TO, getRenderedTemplate(templateConfig.email.globalException, data))

    this._logger.error(JSON.stringify(data))

    throw new ErrorException({ message, lkMessage }, status)
  }
}
