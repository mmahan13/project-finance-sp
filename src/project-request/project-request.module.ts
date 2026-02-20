import { Module } from '@nestjs/common';
import { ProjectRequestService } from './project-request.service';
import { ProjectRequestController } from './project-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRequest } from './entities/project-request.entity';

@Module({
  controllers: [ProjectRequestController],
  providers: [ProjectRequestService],
  imports: [TypeOrmModule.forFeature([ProjectRequest])],
})
export class ProjectRequestModule {}
