import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { IJwtPayload } from '../interfaces/default.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * @constructor
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    })
  }

  /**
   * @method validate
   * @param {IJwtPayload} jwtPayload
   * @returns {IJwtPayload}
   */
  validate = (jwtPayload: IJwtPayload): IJwtPayload => jwtPayload
}
