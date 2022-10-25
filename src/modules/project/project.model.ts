import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface Project extends IDatabaseDefaultProps {
  title?: string
  excerpt?: string
  slug?: string
  image?: string
  contractAddress?: string
}
