import { Injectable } from '@nestjs/common';
import { CreateActivitySectorDto } from './dto/create-activity-sector.dto';
import { UpdateActivitySectorDto } from './dto/update-activity-sector.dto';

@Injectable()
export class ActivitySectorService {
  create(createActivitySectorDto: CreateActivitySectorDto) {
    return 'This action adds a new activitySector';
  }

  findAll() {
    return `This action returns all activitySector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activitySector`;
  }

  update(id: number, updateActivitySectorDto: UpdateActivitySectorDto) {
    return `This action updates a #${id} activitySector`;
  }

  remove(id: number) {
    return `This action removes a #${id} activitySector`;
  }
}
