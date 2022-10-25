import { Module } from '@nestjs/common'
import { ContractCherrioProjectActivatorService } from './contract-cherrio-project-activator.service'
import { ContractCherrioProjectActivatorResolver } from './contract-cherrio-project-activator.resolver'

@Module({
  providers: [ContractCherrioProjectActivatorService, ContractCherrioProjectActivatorResolver],
  exports: [ContractCherrioProjectActivatorService]
})
export class ContractCherrioProjectActivatorModule {}
