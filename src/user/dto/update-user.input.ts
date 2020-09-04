import { InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator"

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'The name field cannot be empty' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'The email field cannot be empty!' })
  @IsOptional()
  email?: string;
}