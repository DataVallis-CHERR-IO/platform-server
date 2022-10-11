import { CustomDecorator, SetMetadata } from '@nestjs/common'
import { DecoratorEnum } from '../enums/decorator.enum'

/**
 * @function Public
 * @returns {CustomDecorator<DecoratorEnum>}
 */
export const Public = (): CustomDecorator<DecoratorEnum> => SetMetadata(DecoratorEnum.PUBLIC, true)
