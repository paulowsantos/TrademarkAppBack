import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import People from '../../../../people/infra/typeorm/entities/People';

@Entity('projects')
class Projects {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  foreman1_id: string;

  @OneToMany(() => People, people => people.id)
  @JoinColumn({ name: 'foreman1_id' })
  foreman1: People;

  @Column()
  foreman2_id: string;

  @OneToMany(() => People, people => people.id)
  @JoinColumn({ name: 'foreman2_id' })
  foreman2: People;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Projects;
