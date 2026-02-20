import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../enums/user-role.enum';
import { ProjectRequest } from 'src/project-request/entities/project-request.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: true })
  bbvaUserId: string;

  @Column('text', { nullable: false })
  fullName: string;

  @Column('text', { unique: true, nullable: false })
  email: string;

  @Column('text', { nullable: false, select: false })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    array: true,
    default: [UserRole.REQUESTOR],
  })
  roles: UserRole[];

  // Peticiones que este usuario ha creado
  @OneToMany(() => ProjectRequest, (request) => request.requestor)
  createdRequests: ProjectRequest[];

  // Peticiones donde este usuario es el Analista de Riesgos
  @ManyToMany(() => ProjectRequest, (request) => request.riskAnalysts)
  riskAnalysisRequests: ProjectRequest[];

  @Column('boolean', { default: true })
  isActive: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp with time zone',
  })
  updatedAt: Date;
}
