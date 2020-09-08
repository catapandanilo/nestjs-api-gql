import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/auth/constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user;
  }

  async create(data: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException('Problem creating a user');
    }

    return userSaved;
  }

  async update(id: string, data: UpdateUserInput): Promise<User> {
    const user = await this.findById(id);
    await this.userRepository.update(user, { ...data });
    const userUpdated = this.userRepository.create({ ...user, ...data });
    return userUpdated;
  }

  async delete(id: string): Promise<boolean> {
    const user = await this.findById(id);
    const deleted = await this.userRepository.delete(user);
    return deleted ? true : false;
  }
}
