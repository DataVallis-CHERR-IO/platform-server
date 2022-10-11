import { ICommonRes } from '../graphql.interface'

export interface IAuthModel {
  email: string
  password: string
}

export type IAuthLoginReq = IAuthModel

export interface IAuthLoginRes {
  token: string
}

export interface IAuthSignupReq extends IAuthModel {
  firstName: string
  lastName: string
}

export type IAuthSignupRes = ICommonRes

export interface IAuthVerifyReq {
  hash: string
}

export interface IAuthVerifyRes extends ICommonRes {
  email?: string
}
