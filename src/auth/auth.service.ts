import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthParamsInput } from './dto/auth-params.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
  ) { }

  async login(user: AuthParamsInput) {
    const payload = { email: user.email, password: user.password };
    return this.jwtService.sign(payload)
  }
}

