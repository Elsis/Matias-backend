import { IsNotEmpty } from "class-validator";

export class UserLoginDto {
    @IsNotEmpty()
    user: string;
    @IsNotEmpty()
    password: string;
}