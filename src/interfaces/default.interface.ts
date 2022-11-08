export interface IJwtPayload {
  [key: string]: string
}

export interface IRenderTemplate {
  [key: string]: string
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

export interface IBTFSAuthHeaders {
  headers: {
    'API-KEY': string
    'Content-Type': string
  }
}

export interface IBTFSUploadHeaders {
  headers: {
    token?: string
    'Content-Type': string
  }
}
