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

export interface IContractProjectActivatorOptions {
  address: string
  numActivators: number
  activationPercentage: number
}

export interface ITronNetworkOptions {
  provider: string
}

export interface IDatetimeOptions {
  format: string
}

export interface IBTFSAuthHeaderConfig {
  headers: {
    'API-KEY': string
    'Content-Type': string
  }
}

export interface IBTFSUploadHeaderConfig {
  headers: {
    token?: string
    'Content-Type': string
  }
}
