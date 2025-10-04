export const JOB_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
] as const;
export type JobType = (typeof JOB_TYPES)[number];

export type Job = {
  id: string; 
  title: string; // Job Title
  companyName: string; // Company Name
  companyLogo?: string | null; // company logo
  companyDomain?: string;
  location: string; // Location
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship"; // Job Type
  salaryMin?: number | null;
  salaryMax?: number | null;
  description: string; // Job Description
  applicationDeadline: string; // ISO date string
  createdAt: string,
};
