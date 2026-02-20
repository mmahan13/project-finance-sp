import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRequestModule } from './project-request/project-request.module';
import { RegionModule } from './region/region.module';
import { OfficeModule } from './office/office.module';
import { CurrencyModule } from './currency/currency.module';
import { ActivitySectorModule } from './activity-sector/activity-sector.module';
import { WorkflowActivityModule } from './workflow-activity/workflow-activity.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.BD_HOST,
      port: process.env.BD_PORT ? parseInt(process.env.BD_PORT) : 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, //carga las entidades en la bd que se crean
      synchronize: true, //Solo en dev en pro no se usa.
    }),
    ProjectRequestModule,
    RegionModule,
    OfficeModule,
    CurrencyModule,
    ActivitySectorModule,
    WorkflowActivityModule,
    AuthModule,
  ],
})
export class AppModule {}
