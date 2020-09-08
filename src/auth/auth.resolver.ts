import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthParamsInput } from './dto/auth-params.input';
import { UserService } from 'src/user/user.service';
import { UnauthorizedException } from '@nestjs/common';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) { }

  @Query(() => String)
  async login(
    @Args('params') { email, password }: AuthParamsInput
  ): Promise<string> {

    try {
      await this.userService.findByEmail(email);

      // const valid = await bcryptjs.compare(password, user.password);
      // if (!valid) {
      //   throw new UnauthorizedException('Email or password incorrect');
      // }

      // const payload = { email: user.email, password: user.password };
      // const jwt = this.jwt.sign(payload);
      // res.cookie('token', jwt, { httpOnly: true });

      return await this.authService.login({ email, password })
    } catch (error) {
      throw new UnauthorizedException('Email or password incorrect');
    }
  }

}
