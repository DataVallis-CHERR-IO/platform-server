export interface IJwtPayload {
  [key: string]: string
}

export interface IRenderTemplate {
  [key: string]: string
}

export interface ITranslate {
  [key: string]: any
}

export interface ITemplateConfig {
  email: {
    globalException: string
    accountVerification: string
  }
}

export interface IDatabaseDefaultProps {
  _id?: string
  createdAt?: string
  updatedAt?: string
}

export interface IIPFSHeaders {
  headers: {
    'X-API-KEY': string
    'Content-Type': string
    accept: string
  }
}
