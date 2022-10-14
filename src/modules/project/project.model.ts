import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface Project extends IDatabaseDefaultProps {
  title?: string
  excerpt?: string
  slug?: string
  image?: string
  goal?: number
  contractAddress?: string
  statusId?: number
  startedAt?: string
  endedAt?: string
}
