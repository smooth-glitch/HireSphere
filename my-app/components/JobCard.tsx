import { Card, Group, Text, Badge, Button, Avatar, Stack } from "@mantine/core";
import { IconBriefcase, IconMapPin, IconWallet } from "@tabler/icons-react";
import styles from "./JobCard.module.css";

export interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo?: string;
  companyDomain?: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  jobType: string;
  description: string;
  applicationDeadline?: string;
  createdAt: string;
}

//"time ago"
function timeAgo(dateStr: string) {
  if (!dateStr) return "—";
  const created = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? "s" : ""} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}

export default function JobCard({ job }: { job: Job }) {
  const postedAgo = timeAgo(job.createdAt);

  return (
    <Card
      shadow="sm"
      padding="sm"
      radius="lg"
      withBorder
      style={{
        background: "white",
        borderColor: "#EEF2F7",
        boxShadow: "0 4px 14px rgba(16,24,40,0.05)",
        width: "100%",
        height: "120%",
        minHeight: "300px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Inter, sans-serif",
        margin: 0,
      }}
    >
      {/* PostedAgo */}
      <Badge
        color="blue"
        variant="dark"
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          fontSize: "10px",
          fontWeight: 600,
          background: "#E0F2FE",
          color: "#2563EB",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        {postedAgo}
      </Badge>

      {/* Logo */}
      <Avatar
        src={job.companyLogo || undefined}
        radius="xl"
        size={50}
        style={{
          backgroundColor: "#F3F4F6",
          marginBottom: "8px",
          image: { objectFit: "contain" },
        }}
      >
        {!job.companyLogo && job.companyName?.[0]}
      </Avatar>

      {/* Title */}
      <Text
        style={{
          fontSize: "18px",
          fontWeight: 750,
          marginBottom: "6px",
        }}
      >
        {job.title}
      </Text>

      {/* Meta row */}
      <Group gap="md" mb="sm" wrap="nowrap">
        <Group gap={4}>
          <IconBriefcase size={16} color="#6B7280" />
          <Text style={{ fontSize: "14px", color: "#6B7280" }}>1–3 yr Exp</Text>
        </Group>
        <Group gap={4}>
          <IconMapPin size={16} color="#6B7280" />
          <Text style={{ fontSize: "16px", color: "#6B7280" }}>
            {job.location
              ? job.location.includes(",")
                ? job.location
                : `${job.location}, India`
              : "—"}
          </Text>
        </Group>

        <Group gap={4}>
          <IconWallet size={16} color="#6B7280" />
          <Text style={{ fontSize: "16px", color: "#6B7280" }}>
            {job.salaryMax ? `${Math.round(job.salaryMax / 100000)} LPA` : "—"}
          </Text>
        </Group>
      </Group>

      {/* Description */}
      <Stack gap={2} mb="sm">
        {job.description
          ?.split(".")
          .filter((line) => line.trim())
          .slice(0, 2)
          .map((point, idx) => (
            <Text
              key={idx}
              style={{
                fontSize: "16px",
                color: "#6B7280",
                lineHeight: 1.3,
              }}
            >
              • {point.trim()}
            </Text>
          ))}
      </Stack>

      {/* Apply Button */}
      <Button
        fullWidth
        radius="md"
        styles={{
          root: {
            background: "#0096FF",
            fontWeight: 600,
            fontSize: "13px",
            height: "46px",
            transition: "all 0.3s ease", 
          },
        }}
        className={styles.applyButton}
      >
        Apply Now
      </Button>
    </Card>
  );
}
