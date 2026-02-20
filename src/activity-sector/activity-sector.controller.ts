import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitySectorService } from './activity-sector.service';
import { CreateActivitySectorDto } from './dto/create-activity-sector.dto';
import { UpdateActivitySectorDto } from './dto/update-activity-sector.dto';

@Controller('activity-sector')
export class ActivitySectorController {
  constructor(private readonly activitySectorService: ActivitySectorService) {}

  @Post()
  create(@Body() createActivitySectorDto: CreateActivitySectorDto) {
    return this.activitySectorService.create(createActivitySectorDto);
  }

  @Get()
  findAll() {
    return this.activitySectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitySectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivitySectorDto: UpdateActivitySectorDto) {
    return this.activitySectorService.update(+id, updateActivitySectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitySectorService.remove(+id);
  }
}
