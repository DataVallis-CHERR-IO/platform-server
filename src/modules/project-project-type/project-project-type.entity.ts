import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { StatusEnum } from '../../enums/status.enum'

@Entity({ name: 'project_project_type' })
export class ProjectProjectTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true
  })
  id: number

  @Column({
    name: 'project_id',
    type: 'int',
    unsigned: true
  })
  projectId: number

  @Column({
    name: 'project_type_id',
    type: 'tinyint',
    unsigned: true
  })
  projectTypeId: number

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
