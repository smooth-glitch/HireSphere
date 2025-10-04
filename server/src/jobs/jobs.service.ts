import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';


const KNOWN_DOMAINS: Record<string, string> = {
  Netflix: 'netflix.com',
  Microsoft: 'microsoft.com',
  Swiggy: 'swiggy.com',
  Zomato: 'zomato.com',
  Zerodha: 'zerodha.com',
  Atlassian: 'atlassian.com',
};

const CITY_COUNTRY_MAP: Record<string, string> = {
  'Mountain View': 'USA',
  Seattle: 'USA',
  Dublin: 'Ireland',
  'New York': 'USA',
  Sydney: 'Australia',
  'San Francisco': 'USA',
  'San Jose': 'USA',
  Stockholm: 'Sweden',
  Gurgaon: 'India',
  Hyderabad: 'India',
  Bangalore: 'India',
  Chennai: 'India',
  Delhi: 'India',
  Mumbai: 'India',
  Remote: 'Remote',
};

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    
    if (!createJobDto.companyDomain && createJobDto.companyName) {
      const matchedDomain = KNOWN_DOMAINS[createJobDto.companyName];
      if (matchedDomain) {
        createJobDto.companyDomain = matchedDomain;
      }
    }

    const job = this.jobRepository.create(createJobDto);
    return this.jobRepository.save(job);
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.jobRepository.delete(id);
    return { deleted: (result.affected ?? 0) > 0 };
  }

  async findAll(filters: any): Promise<Job[]> {
    const qb = this.jobRepository.createQueryBuilder('job');

    // --- Title filter
    if (filters.title) {
      qb.andWhere('job.title ILIKE :title', { title: `%${filters.title}%` });
    }

    // --- Location filter
    if (filters.location) {
      qb.andWhere('job.location ILIKE :location', {
        location: `%${filters.location}%`,
      });
    }

    // --- Job type filter
    if (filters.jobType) {
      qb.andWhere('job.jobType = :jobType', { jobType: filters.jobType });
    }

    // --- Salary filter (using min/max)
    // --- Salary filter
    if (filters.salaryMin && filters.salaryMax) {
      const min = Number(filters.salaryMin);
      const max = Number(filters.salaryMax);

      qb.andWhere('job.salaryMin >= :min AND job.salaryMax <= :max', {
        min,
        max,
      });
    }

    // --- Default sort
    qb.orderBy('job.salaryMax', 'DESC');

    return qb.getMany();
  }

  async removeAll(): Promise<{ deleted: boolean }> {
    await this.jobRepository.clear();
    return { deleted: true };
  }

  async fixLocations(): Promise<void> {
    const jobs = await this.jobRepository.find();

    for (const job of jobs) {
      const city = job.location?.split(',')[0]?.trim();
      const country = CITY_COUNTRY_MAP[city] ?? null;

      if (country && city !== 'Remote') {
        job.location = `${city}, ${country}`;
      } else if (city === 'Remote') {
        job.location = 'Remote';
      }

      await this.jobRepository.save(job);
    }
  }
}
