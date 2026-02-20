import { Injectable } from '@nestjs/common';
import { CreateWorkflowActivityDto } from './dto/create-workflow-activity.dto';
import { UpdateWorkflowActivityDto } from './dto/update-workflow-activity.dto';

@Injectable()
export class WorkflowActivityService {
  create(createWorkflowActivityDto: CreateWorkflowActivityDto) {
    return 'This action adds a new workflowActivity';
  }

  findAll() {
    return `This action returns all workflowActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workflowActivity`;
  }

  update(id: number, updateWorkflowActivityDto: UpdateWorkflowActivityDto) {
    return `This action updates a #${id} workflowActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} workflowActivity`;
  }
}
