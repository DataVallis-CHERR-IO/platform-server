import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { StatusEnum } from '../../enums/status.enum'

@Entity({ name: 'project', orderBy: { id: 'DESC' } })
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true
  })
  id: number

  @Column({
    type: 'varchar',
    length: 127
  })
  title: string

  @Column({
    type: 'varchar',
    length: 255
  })
  excerpt: string

  @Column({
    type: 'text'
  })
  description: string

  @Column({
    type: 'varchar',
    length: 127
  })
  slug: string

  @Column({
    type: 'varchar',
    length: 255
  })
  image: string

  @Column({
    name: 'contract_address',
    type: 'varchar',
    length: 34
  })
  contractAddress: string

  @Column({
    type: 'varchar',
    length: 31
  })
  goal: string

  @Column({
    type: 'int',
    unsigned: true,
    nullable: true
  })
  duration: number

  @Column({
    name: 'started_at',
    type: 'datetime',
    nullable: true
  })
  startedAt: string

  @Column({
    name: 'ended_at',
    type: 'datetime',
    nullable: true
  })
  endedAt: string

  @Column({
    name: 'status_id',
    type: 'tinyint',
    unsigned: true,
    default: () => StatusEnum.ACTIVE
  })
  statusId: number

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: string

  @Column({
    name: 'removed_at',
    type: 'datetime',
    nullable: true
  })
  removedAt: string

  @Column({
    type: 'timestamp'
  })
  timestamp: string
}
