import { ProjectRequest } from 'src/project-request/entities/project-request.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activity_sectors')
export class ActivitySector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // Ej: 'Real Estate', 'Telecom'

  @OneToMany(() => ProjectRequest, (request) => request.activitySector)
  requests: ProjectRequest[];
}
