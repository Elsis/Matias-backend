import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create_user.dto';
import { get } from 'node:http';
import { UserLoginDto } from './dtos/user_login';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  async getUserById(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return await this.usersService.getUserById(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]>{
      return await this.usersService.getAllUsers();
  }


  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Post("/login")
  async login(@Body() userLoginDto: UserLoginDto): Promise<User> {
    return this.usersService.login(userLoginDto);
  }
}
