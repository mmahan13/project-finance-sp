import { Office } from 'src/office/entities/office.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // Ej: 'EMEA', 'APAC', 'Americas'

  @OneToMany(() => Office, (office) => office.region)
  offices: Office[];
}
