import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  user: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  school: string;
  @IsNotEmpty()
  tutor: string;
  @IsNotEmpty()
  age: number;
}
