import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToOne,
  // JoinColumn,
} from 'typeorm';

// import People from './People';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  isAdmin: boolean;

  @Column()
  people_id: string;

  // @OneToOne(() => People)
  // @JoinColumn({ name: 'people_id' })
  // people: People;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
