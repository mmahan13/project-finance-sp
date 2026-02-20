import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkflowActivityService } from './workflow-activity.service';
import { CreateWorkflowActivityDto } from './dto/create-workflow-activity.dto';
import { UpdateWorkflowActivityDto } from './dto/update-workflow-activity.dto';

@Controller('workflow-activity')
export class WorkflowActivityController {
  constructor(private readonly workflowActivityService: WorkflowActivityService) {}

  @Post()
  create(@Body() createWorkflowActivityDto: CreateWorkflowActivityDto) {
    return this.workflowActivityService.create(createWorkflowActivityDto);
  }

  @Get()
  findAll() {
    return this.workflowActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkflowActivityDto: UpdateWorkflowActivityDto) {
    return this.workflowActivityService.update(+id, updateWorkflowActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowActivityService.remove(+id);
  }
}
