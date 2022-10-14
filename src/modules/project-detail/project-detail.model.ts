import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface ProjectDetail extends IDatabaseDefaultProps {
  projectId?: string
  description?: string
  requirements?: string
}
