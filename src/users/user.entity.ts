import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  user: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  school: string;
  @Column()
  tutor: string;
  @Column()
  age: number;
}
