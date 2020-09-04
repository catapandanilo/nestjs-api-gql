import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) { }

  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await this.userService.findAllUsers();
    return users;
  }

  @Query(() => User)
  async user(
    @Args('id') id: string
  ): Promise<User> {
    const user = await this.userService.findUserById(id);
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Args('data') data: CreateUserInput
  ): Promise<User> {
    const user = this.userService.createUser(data);
    return user;
  }
}
