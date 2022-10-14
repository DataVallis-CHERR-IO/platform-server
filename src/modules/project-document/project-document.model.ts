import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface ProjectDocument extends IDatabaseDefaultProps {
  projectId?: string
  title?: string
  path?: string
  icon?: string
  format?: string
  statusId?: number
  deletedAt?: string
}
