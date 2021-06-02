import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create_user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private userRepository: UsersRepository,
  ) {}

  async getUserById(id: string): Promise<User> {
    const found = await this.userRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`No existe un usuario con el id: ${id}`);
    }

    return found;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, user, password, email, school, tutor, age } = createUserDto;

    const newUser = this.userRepository.create({
      name,
      user,
      password,
      email,
      school,
      tutor,
      age,
    });

    await this.userRepository.save(newUser);
    return newUser;
  }
}
