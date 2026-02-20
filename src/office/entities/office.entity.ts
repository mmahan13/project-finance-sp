import { ProjectRequest } from 'src/project-request/entities/project-request.entity';
import { Region } from 'src/region/entities/region.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('offices')
export class Office {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // Ej: 'London', 'Singapore'

  @ManyToOne(() => Region, (region) => region.offices, { eager: true })
  region: Region[];

  @OneToMany(() => ProjectRequest, (request) => request.office, { eager: true })
  requests: ProjectRequest[];
}
