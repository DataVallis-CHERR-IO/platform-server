import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult'
import { BaseEntity, FindOneOptions, Repository } from 'typeorm'
import { ObjectID } from 'typeorm/driver/mongodb/typings'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { DeepPartial } from 'typeorm/common/DeepPartial'
import { SaveOptions } from 'typeorm/repository/SaveOptions'
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere'
import { IQueryOptions } from '../interfaces/graphql/graphql.interface'
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions'

export class BaseService<Entity extends BaseEntity> {
  /**
   * @constructor
   * @param {Repository<Entity>} _entityRepository
   */
  constructor(private _entityRepository: Repository<Entity>) {}

  /**
   * @method find
   * @param {IQueryOptions} options
   * @returns {Promise<Entity[]>}
   */
  find = async (options: IQueryOptions<Entity>): Promise<Entity[]> =>
    await this._entityRepository.find({
      ...options
    } as FindManyOptions)

  /**
   * @method findOne
   * @param {IQueryOptions} options
   * @returns {Promise<Entity>}
   */
  findOne = async (options: IQueryOptions<Entity>): Promise<Entity> =>
    await this._entityRepository.findOne({
      ...options
    } as FindOneOptions)

  /**
   * @method save
   * @param {T} entity
   * @param {SaveOptions} options
   * @returns {Promise<T & Entity>}
   */
  save = async <T extends DeepPartial<Entity>>(entity: T, options?: SaveOptions): Promise<T & Entity> => await this._entityRepository.save(entity, options)

  /**
   * @method update
   * @param {string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Entity>} criteria
   * @param {QueryDeepPartialEntity<Entity>} partialEntity
   * @returns {Promise<UpdateResult>}
   */
  update = async (
    criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<Entity>,
    partialEntity: QueryDeepPartialEntity<Entity>
  ): Promise<UpdateResult> => await this._entityRepository.update(criteria, partialEntity)
}
