import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface ProjectType extends IDatabaseDefaultProps {
  name?: string
  lkName?: string
  statusId?: number
}
