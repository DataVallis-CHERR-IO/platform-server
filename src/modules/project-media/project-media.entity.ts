import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { StatusEnum } from '../../enums/status.enum'
import { MediaTypeEnum } from '../../enums/media-type.enum'

@Entity({ name: 'project_media' })
export class ProjectMediaEntity extends BaseEntity {
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
    name: 'media_type_id',
    type: 'tinyint',
    unsigned: true,
    default: () => MediaTypeEnum.IMAGE
  })
  mediaTypeId: number

  @Column({
    type: 'varchar',
    length: 255
  })
  name: string

  @Column({
    type: 'varchar',
    length: 255
  })
  path: string

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
