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
