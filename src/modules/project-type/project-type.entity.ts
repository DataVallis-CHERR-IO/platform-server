import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { StatusEnum } from '../../enums/status.enum'

@Entity({ name: 'project_type' })
export class ProjectTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'tinyint',
    unsigned: true
  })
  id: number

  @Column({
    type: 'varchar',
    length: 31
  })
  name: string

  @Column({
    name: 'language_key_name',
    type: 'varchar',
    length: 31
  })
  lkName: string

  @Column({
    name: 'status_id',
    type: 'tinyint',
    unsigned: true,
    default: () => StatusEnum.ACTIVE
  })
  statusId: number
}
