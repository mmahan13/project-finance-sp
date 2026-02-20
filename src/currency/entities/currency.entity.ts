import { ProjectRequest } from 'src/project-request/entities/project-request.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('currencies')
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 3 })
  code: string; // Ej: 'GBP', 'USD'

  @Column({ nullable: true })
  symbol: string; // Ej: '£', '$'

  @Column()
  name: string; // Ej: 'British Pound'

  @OneToMany(() => ProjectRequest, (request) => request.currency)
  requests: ProjectRequest[];
}
