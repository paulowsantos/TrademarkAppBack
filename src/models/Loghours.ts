import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import People from './People';
import Projects from './Projects';

@Entity('loghours')
class Loghours {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  people_id: string;

  @ManyToOne(() => People)
  @JoinColumn({ name: 'people_id' })
  people: People;

  @Column()
  project_id: string;

  @ManyToOne(() => Projects)
  @JoinColumn({ name: 'project_id' })
  project: Projects;

  @Column()
  date: Date;

  @Column()
  hoursAmount: number;

  @Column()
  otAmount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Loghours;
