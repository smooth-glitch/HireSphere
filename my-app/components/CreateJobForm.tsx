"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Group,
  TextInput,
  Select,
  NumberInput,
  Input,
} from "@mantine/core";
import { createJob } from "@/lib/api";
import dayjs from "dayjs";
import { notifications } from "@mantine/notifications";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "./datepicker.css";

type JobForm = {
  title: string;
  companyName: string;
  location: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship"; // ✅ match backend
  salaryMin: number;
  salaryMax: number;
  applicationDeadline: string; // ✅ always string
  description: string;
};

const DRAFT_KEY = "jobFormDraft";

export default function CreateJobForm({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: (job: any) => void;
}) {
  const [loading, setLoading] = useState(false);

  const [job, setJob] = useState<JobForm>({
    title: "",
    companyName: "",
    location: "",
    jobType: "Full-time",
    salaryMin: 0,
    salaryMax: 4000000,
    applicationDeadline: "",
    description: "",
  });

  // --- Load draft if exists
  useEffect(() => {
    const draft = localStorage.getItem(DRAFT_KEY);
    if (draft) {
      setJob(JSON.parse(draft));
    }
  }, []);

  const handleSaveDraft = () => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(job));
    notifications.show({
      title: "Draft saved",
      message: "Your job draft has been stored locally.",
      color: "blue",
      autoClose: 2000,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const createdJob = await createJob({
        ...job,
        applicationDeadline: job.applicationDeadline
          ? dayjs(job.applicationDeadline).format("YYYY-MM-DD")
          : "",
      });

      localStorage.removeItem(DRAFT_KEY);

      onSuccess(createdJob);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "24px",
        width: "100%",
        maxWidth: "95vw",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
        Create Job Opening
      </h2>

      <Group grow mb="md">
        <TextInput
          label="Job Title"
          placeholder="Full Stack Developer"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.currentTarget.value })}
        />
        <TextInput
          label="Company Name"
          placeholder="Amazon, Microsoft, Swiggy"
          value={job.companyName}
          onChange={(e) =>
            setJob({ ...job, companyName: e.currentTarget.value })
          }
        />
      </Group>

      <Group grow mb="md">
        <Select
          label="Location"
          placeholder="Choose Preferred Location"
          data={[
            "Gurgaon",
            "Hyderabad",
            "Chennai",
            "Bangalore",
            "Delhi",
            "Mumbai",
            "Remote",
          ]}
          value={job.location}
          onChange={(v) => setJob({ ...job, location: v || "" })}
        />
        <Select
          label="Job Type"
          data={["Full-time", "Part-time", "Contract", "Internship"]}
          value={job.jobType}
          onChange={(v) =>
            setJob({ ...job, jobType: (v as JobForm["jobType"]) || "Full-time" })
          }
        />
      </Group>

      <Group grow mb="md">
        <NumberInput
          label="Minimum Salary (INR)"
          value={job.salaryMin}
          onChange={(val) =>
            setJob({ ...job, salaryMin: val ? Number(val) : 0 })
          }
          min={0}
        />
        <NumberInput
          label="Maximum Salary (INR)"
          value={job.salaryMax}
          onChange={(val) =>
            setJob({ ...job, salaryMax: val ? Number(val) : 0 })
          }
          min={0}
        />

        {/* react-datepicker inside Mantine Input.Wrapper */}
        <Input.Wrapper
          label="Application Deadline"
          styles={{ label: { fontSize: 13, fontWeight: 500, marginBottom: 4 } }}
          style={{ width: "100%" }}
        >
          <DatePicker
            selected={
              job.applicationDeadline
                ? new Date(job.applicationDeadline)
                : null
            }
            onChange={(date: Date | null) =>
              setJob({
                ...job,
                applicationDeadline: date
                  ? dayjs(date).format("YYYY-MM-DD")
                  : "",
              })
            }
            dateFormat="dd MMM yyyy"
            minDate={new Date()}
            placeholderText="Pick deadline"
            className="datepicker-input"
          />
        </Input.Wrapper>
      </Group>

      <textarea
        placeholder="Please share a description to let the candidate know more about the job role"
        value={job.description}
        onChange={(e) => setJob({ ...job, description: e.target.value })}
        style={{
          width: "100%",
          minHeight: "120px",
          fontSize: "14px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #E5E7EB",
          fontFamily: "Inter, sans-serif",
        }}
      />

      <Group justify="space-between" mt="xl">
        <Button variant="outline" onClick={handleSaveDraft}>
          Save Draft
        </Button>
        <Button color="blue" loading={loading} onClick={handleSubmit}>
          Publish »
        </Button>
      </Group>
    </div>
  );
}
