import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ContractCherrioProjectActivatorService } from './contract-cherrio-project-activator.service'
import { Public } from '../../../decorators/public.decorator'

@Resolver('Upload')
export class ContractCherrioProjectActivatorResolver {
  /**
   * @constructor
   * @param {ContractCherrioProjectActivatorService} _contractCherrioProjectActivatorService
   */
  constructor(private readonly _contractCherrioProjectActivatorService: ContractCherrioProjectActivatorService) {}

  @Public()
  @Mutation('newProject')
  async newProject(@Args() args: any): Promise<boolean> {
    return await this._contractCherrioProjectActivatorService.newProject(args)
  }
}
