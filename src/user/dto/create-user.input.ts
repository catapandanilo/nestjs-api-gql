import { InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, MaxLength, MinLength } from "class-validator"
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'The name field cannot be empty' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'The email field cannot be empty!' })
  email: string;

  @MinLength(4)
  @MaxLength(20)
  password: string

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date
}