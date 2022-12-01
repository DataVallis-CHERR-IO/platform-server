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

export interface IDatetimeOptions {
  format: string
}

export interface IContractOptions {
  projectActivator: {
    address: string
    numActivators: number
    activationPercentage: number
  }
}

export interface INetworkOptions {
  explorerUrl: string
  httpsProvider: string
  wssProvider: string
}

export interface IBTFSConfig {
  url: string
  authHeaders: {
    headers: {
      'API-KEY': string
      'Content-Type': string
    }
  }
  uploadHeaders: {
    headers: {
      token?: string
      'Content-Type': string
    }
  }
}
