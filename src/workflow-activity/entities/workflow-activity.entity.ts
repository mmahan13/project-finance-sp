import { ProjectRequest } from 'src/project-request/entities/project-request.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('workflow_activities')
export class WorkflowActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  stepName: string; // Ej: 'Risk Review'

  @Column({ type: 'timestamp' })
  startedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date;

  // --- Relaciones ---

  @ManyToOne(
    () => ProjectRequest,
    (request) => request.activities /* { onDelete: 'CASCADE' } */,
  )
  request: ProjectRequest;

  /* 
  @ManyToOne(() => User)
  actor: User; */
}
