import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import People from '../../../../people/infra/typeorm/entities/People';
import Projects from './Projects';

@Entity('projectcrew')
class ProjectCrew {
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
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ProjectCrew;
