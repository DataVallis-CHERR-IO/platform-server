import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface ProjectMedia extends IDatabaseDefaultProps {
  projectId?: string
  type?: string
  title?: string
  path?: string
  format?: string
  icon?: string
  statusId?: number
}
