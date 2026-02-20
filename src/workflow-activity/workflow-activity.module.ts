import { Module } from '@nestjs/common';
import { WorkflowActivityService } from './workflow-activity.service';
import { WorkflowActivityController } from './workflow-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowActivity } from './entities/workflow-activity.entity';

@Module({
  controllers: [WorkflowActivityController],
  providers: [WorkflowActivityService],
  imports: [TypeOrmModule.forFeature([WorkflowActivity])],
})
export class WorkflowActivityModule {}
