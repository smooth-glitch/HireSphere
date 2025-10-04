import { Job } from "./JobTypes";
import { MOCK_JOBS } from "./mockJobs";

function buildClearbitLogo(
  companyName?: string,
  companyDomain?: string
): string | undefined {
  if (companyDomain) {
    return `https://logo.clearbit.com/${companyDomain}`;
  }
  if (companyName) {
    const domain = companyName.toLowerCase().replace(/\s+/g, "") + ".com";
    return `https://logo.clearbit.com/${domain}`;
  }
  return undefined;
}

function normalizeJob(job: any): Job {
  return {
    id: job.id,
    title: job.title,
    companyName: job.companyName,
    companyDomain: job.companyDomain,
    companyLogo:
      job.companyLogo ?? buildClearbitLogo(job.companyName, job.companyDomain),
    location: job.location,
    jobType: job.jobType,
    salaryMin: job.salaryMin,
    salaryMax: job.salaryMax,
    description: job.description,
    applicationDeadline: job.applicationDeadline,
    createdAt: job.createdAt,
  };
}

// --- FETCH JOBS (with filters)
export async function fetchJobs(filters: any): Promise<Job[]> {
  const params = new URLSearchParams();

  if (filters.title) params.set("title", filters.title);
  if (filters.location) params.set("location", filters.location);
  if (filters.jobType) params.set("jobType", filters.jobType);

  if (filters.salary && filters.salary.length === 2) {
    const [min, max] = filters.salary;
    if (!(min === 0 && max === 4000000)) {
      params.set("salaryMin", String(min));
      params.set("salaryMax", String(max));
    }
  }

 
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/jobs?${params.toString()}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load jobs");

    const jobs = await res.json();
    return jobs.map(normalizeJob);
  } catch (e) {
    console.error("fetchJobs failed:", e);
    return MOCK_JOBS.map(normalizeJob);
  }
}

// --- CREATE JOB
export async function createJob(job: Omit<Job, "id" | "createdAt">): Promise<Job> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });

  if (!res.ok) throw new Error("Failed to create job");

  const newJob = await res.json();
  return normalizeJob(newJob);
}
