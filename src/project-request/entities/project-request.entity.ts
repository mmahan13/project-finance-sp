import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RequestStatus } from '../enuns/request-status.enum';
import { Priority } from 'src/common/enums/priority.enum';
import { Office } from 'src/office/entities/office.entity';
import { Currency } from 'src/currency/entities/currency.entity';
import { ActivitySector } from 'src/activity-sector/entities/activity-sector.entity';
import { WorkflowActivity } from 'src/workflow-activity/entities/workflow-activity.entity';
import { User } from 'src/auth/entities/user.entity';

@Entity('project_requests')
export class ProjectRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  internalId: string; // Ej: PF-2026-0047

  @Column('text', { unique: true })
  name: string;

  @Column()
  counterparty: string;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: RequestStatus, default: RequestStatus.DRAFT })
  status: RequestStatus;

  @Column({ type: 'enum', enum: Priority })
  priority: Priority;

  @Column('text', { nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // --- Relaciones ---

  // 1. El Originador de la petición
  @ManyToOne(() => User, (user) => user.createdRequests)
  requestor: User;

  // 2. El Analista de Riesgos asignado
  @ManyToMany(() => User, (user) => user.riskAnalysisRequests)
  @JoinTable({
    name: 'requests_risk_analysts', // Opcional: nombre personalizado para la tabla intermedia en Postgres
    joinColumn: { name: 'request_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  riskAnalysts: User[];

  // Nota: Si en el futuro necesitas un "Approver" (Aprobador final),
  // solo tendrías que añadir otra columna aquí apuntando a User.
  // @ManyToOne(() => User, { nullable: true })
  // approver: User;

  @ManyToOne(() => Currency, (currency) => currency.requests)
  currency: Currency;

  @ManyToOne(() => ActivitySector, (sector) => sector.requests)
  activitySector: ActivitySector;

  @ManyToOne(() => Office, (office) => office.requests)
  office: Office;

  @OneToMany(() => WorkflowActivity, (activity) => activity.request, {
    cascade: true,
  })
  activities: WorkflowActivity[];
}
