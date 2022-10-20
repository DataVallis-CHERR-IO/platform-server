import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface ProjectMedia extends IDatabaseDefaultProps {
  projectId?: string
  title?: string
  path?: string
  mediaTypeId?: number
  statusId?: number
}
