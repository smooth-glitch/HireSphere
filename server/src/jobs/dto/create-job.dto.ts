export class CreateJobDto {
    title: string;
    companyName: string;
    location: string;
    jobType: string;
    salaryMin: number;
    salaryMax: number;
    description: string;
    applicationDeadline: string;
    companyLogo?: string;
    companyDomain?: string; 
  }
  