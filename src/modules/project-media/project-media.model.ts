import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface ProjectMedia extends IDatabaseDefaultProps {
  projectId?: string
  title?: string
  description?: string
  path?: string
  image?: string
  statusId?: number
  deletedAt?: string
}
