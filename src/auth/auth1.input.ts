import { InputType, Field } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsOptional, MinLength, MaxLength } from "class-validator"

@InputType()
export class Auth1 {
  @Field()
  email: string;

  @Field()
  password: string;
}
// export class UpdateUserInput {
//   @IsString()
//   @IsNotEmpty({ message: 'The name field cannot be empty' })
//   @IsOptional()
//   name?: string;

//   @IsEmail()
//   @IsNotEmpty({ message: 'The email field cannot be empty!' })
//   @IsOptional()
//   email?: string;

//   @MinLength(4)
//   @MaxLength(20)
//   @IsNotEmpty({ message: 'The password field cannot be empty!' })
//   @IsOptional()
//   password?: string
// }