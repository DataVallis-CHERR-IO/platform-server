export interface Campaign {
  _id?: string
  title?: string
  description?: string
  slug?: string
  contractAddress?: string
  image?: string
  goal?: number
  isHighlightedProject?: boolean
  statusId?: number
  startedAt?: string
  endedAt?: string
  createdAt?: string
  updatedAt?: string
}
