import { Module } from '@nestjs/common';
import { ActivitySectorService } from './activity-sector.service';
import { ActivitySectorController } from './activity-sector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitySector } from './entities/activity-sector.entity';

@Module({
  controllers: [ActivitySectorController],
  providers: [ActivitySectorService],
  imports: [TypeOrmModule.forFeature([ActivitySector])],
})
export class ActivitySectorModule {}
