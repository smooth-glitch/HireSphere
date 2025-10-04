import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  companyName: string;

  @Column({ nullable: true })
  companyLogo?: string;

  @Column({ nullable: true })
  companyDomain?: string;

  @Column()
  location: string;

  @Column({ type: 'bigint', nullable: true })
  salaryMin: number;

  @Column({ type: 'bigint', nullable: true })
  salaryMax: number;

  @Column()
  jobType: string; // Full-time, Part-time, Contract, Internship

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'date', nullable: true })
  applicationDeadline: Date;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;
}
