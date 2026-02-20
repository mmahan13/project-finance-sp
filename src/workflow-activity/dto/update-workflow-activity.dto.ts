import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkflowActivityDto } from './create-workflow-activity.dto';

export class UpdateWorkflowActivityDto extends PartialType(CreateWorkflowActivityDto) {}
