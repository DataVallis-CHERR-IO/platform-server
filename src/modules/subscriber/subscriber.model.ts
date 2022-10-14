import { IDatabaseDefaultProps } from '../../interfaces/default.interface'

export interface Subscriber extends IDatabaseDefaultProps {
  email?: string
  statusId?: number
  subscribedAt?: string
  unsubscribedAt?: string
}
