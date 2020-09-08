import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) { }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async findAllUsers(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Query(() => User)
  async findUserById(
    @Args('id') id: string
  ): Promise<User> {
    const user = await this.userService.findById(id);
    return user;
  }

  @Query(() => User)
  async findUserByEmail(
    @Args('email') email: string
  ): Promise<User> {
    const user = await this.userService.findByEmail(email);
    return user
  }

  @Mutation(() => User)
  async createUser(
    @Args('data') data: CreateUserInput
  ): Promise<User> {
    const user = await this.userService.create(data);
    return user;
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput
  ): Promise<User> {
    const user = await this.userService.update(id, data);
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Args('id') id: string
  ): Promise<boolean> {
    const deleted = await this.userService.delete(id);
    return deleted;
  }

}
