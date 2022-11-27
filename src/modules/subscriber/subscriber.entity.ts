import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { StatusEnum } from '../../enums/status.enum'

@Entity({ name: 'subscriber' })
export class SubscriberEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true
  })
  id: number

  @Column({
    type: 'varchar',
    length: 127
  })
  email: string

  @Column({
    name: 'status_id',
    type: 'tinyint',
    unsigned: true,
    default: () => StatusEnum.ACTIVE
  })
  statusId: number

  @Column({
    name: 'subscribed_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  subscribedAt: string

  @Column({
    name: 'unsubscribed_at',
    type: 'datetime',
    nullable: true
  })
  unsubscribedAt: string

  @Column({
    type: 'timestamp'
  })
  timestamp: string
}
