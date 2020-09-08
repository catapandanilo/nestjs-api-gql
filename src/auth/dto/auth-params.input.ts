import { InputType, Field } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsOptional, MinLength, MaxLength } from "class-validator"

@InputType()
export class AuthParamsInput {
  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'The email field cannot be empty' })
  email: string;

  @Field()
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty({ message: 'The password field cannot be empty' })
  password: string;
}