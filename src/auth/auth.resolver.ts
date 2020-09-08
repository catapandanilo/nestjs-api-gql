import { Resolver, Query, Args, InputType, Field } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth1 } from './auth1.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Query(() => String)
  async login(
    @Args('auth') { email, password }: Auth1
  ): Promise<any> {
    const token = await this.authService.login({ email, password });
    return token
  }
}
