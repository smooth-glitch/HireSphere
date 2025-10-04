import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async findAll(@Query() query) {
    const filters: any = { ...query };

    if (query.salary) {
      try {
        filters.salary = JSON.parse(query.salary); // [min, max]
      } catch {
        filters.salary = null;
      }
    }

    return this.jobsService.findAll(filters);
  }

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }

  @Post('fix-locations')
  async fixLocations(): Promise<{ fixed: boolean }> {
    await this.jobsService.fixLocations();
    return { fixed: true };
  }

  // jobs.controller.ts
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ deleted: boolean }> {
    return this.jobsService.remove(id);
  }

  @Delete('all')
  async removeAll(): Promise<{ deleted: boolean }> {
    return this.jobsService.removeAll();
  }
}
