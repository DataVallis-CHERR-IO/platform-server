import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { StatusEnum } from '../../enums/status.enum'

@Entity({ name: 'media_type' })
export class MediaTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'tinyint',
    unsigned: true
  })
  id: number

  @Column({
    type: 'varchar',
    length: 15
  })
  name: string

  @Column({
    name: 'language_key_name',
    type: 'varchar',
    length: 15
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
