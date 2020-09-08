import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
  ) { }

  async login(user: any) {
    const payload = { email: user.email, password: user.password };
    // return { access_token: this.jwtService.sign(payload), };
    return this.jwtService.sign(payload)
  }
}

