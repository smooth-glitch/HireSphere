"use client";

import {
  Group,
  Select,
  Paper,
  Divider,
  RangeSlider,
  Text,
  rem,
} from "@mantine/core";
import {
  IconSearch,
  IconMapPin,
  IconBriefcase,
  IconChevronDown,
} from "@tabler/icons-react";
import { JOB_TYPES } from "@/lib/JobTypes";
import { useEffect, useState } from "react";
import styles from "./FiltersBar.module.css";

export type Filters = {
  title: string;
  location: string;
  jobType: string | null;
  salary: [number, number];
};

export default function FiltersBar({
  value,
  onChange,
}: {
  value: Filters;
  onChange: (v: Filters) => void;
}) {
  const [local, setLocal] = useState<Filters>({
    title: "",
    location: "",
    jobType: null,
    salary: [0, 4500000],
  });

  useEffect(() => {
    const id = setTimeout(() => onChange(local), 200);
    return () => clearTimeout(id);
  }, [local]);

  return (
    <Paper
      p="sm"
      withBorder={false}
      style={{
        background:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
        borderRadius: 0,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        width: "100%",
        gap: "12px",
      }}
    >
      {/* Search */}
      <Group
        gap={6}
        align="center"
        wrap="nowrap"
        style={{ flex: 1, minWidth: "180px" }}
      >
        <IconSearch size={16} color="#6B7280" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          value={local.title}
          onChange={(e) => setLocal({ ...local, title: e.currentTarget.value })}
          style={{
            border: "none",
            outline: "none",
            fontSize: "14px",
            color: "#374151",
            height: 28,
            fontFamily: "Inter, sans-serif",
            width: "100%",
          }}
        />
      </Group>

      <Divider
        orientation="vertical"
        color="#E0E0E0"
        h={32}
        mx={10}
        className={styles.filterDivider}
      />

      {/* Preferred Location */}
      <Group
        gap={6}
        align="center"
        wrap="nowrap"
        style={{ flex: 1, minWidth: "160px" }}
      >
        <IconMapPin size={16} color="#6B7280" />
        <Select
          placeholder="Preferred Location"
          data={[
            { value: "Gurgaon", label: "Gurgaon" },
            { value: "Hyderabad", label: "Hyderabad" },
            { value: "bangalore", label: "Bangalore" },
            { value: "chennai", label: "Chennai" },
            { value: "delhi", label: "Delhi" },
            { value: "mumbai", label: "Mumbai" },
            { value: "remote", label: "Remote" },
          ]}
          value={local.location}
          onChange={(v) => setLocal({ ...local, location: v || "" })}
          clearable
          rightSection={
            <IconChevronDown size={14} stroke={1.5} color="#6B7280" />
          }
          rightSectionWidth={28}
          styles={{
            input: {
              border: "none",
              fontSize: "14px",
              color: "#374151",
              height: 28,
              fontFamily: "Inter, sans-serif",
            },
            dropdown: { fontSize: "14px", fontFamily: "Inter, sans-serif" },
          }}
        />
      </Group>

      <Divider
        orientation="vertical"
        color="#E0E0E0"
        h={32}
        mx={10}
        className={styles.filterDivider}
      />

      {/* Job type */}
      <Group
        gap={6}
        align="center"
        wrap="nowrap"
        style={{ flex: 1, minWidth: "160px" }}
      >
        <IconBriefcase size={16} color="#6B7280" />
        <Select
          placeholder="Job type"
          data={[...JOB_TYPES]}
          value={local.jobType}
          onChange={(v) => setLocal({ ...local, jobType: v })}
          clearable
          rightSection={
            <IconChevronDown size={14} stroke={1.5} color="#6B7280" />
          }
          rightSectionWidth={28}
          styles={{
            input: {
              border: "none",
              fontSize: "14px",
              color: "#374151",
              height: 28,
              fontFamily: "Inter, sans-serif",
            },
            dropdown: { fontSize: "14px", fontFamily: "Inter, sans-serif" },
          }}
        />
      </Group>

      <Divider
        orientation="vertical"
        color="#E0E0E0"
        h={32}
        mx={10}
        className={styles.filterDivider}
      />

      {/* Salary */}
      <div style={{ flex: 2, minWidth: rem(200) }}>
        <Group justify="space-between" mb={4}>
          <Text
            size="xs"
            style={{
              fontSize: "12px",
              color: "#000",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Salary (LPA)
          </Text>
          <Text
            size="xs"
            fw={500}
            style={{
              fontSize: "12px",
              color: "#000",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {Math.round(local.salary[0] / 100000)} LPA –{" "}
            {Math.round(local.salary[1] / 100000)} LPA
          </Text>
        </Group>
        <RangeSlider
          min={0}
          max={4500000}
          step={50000}
          value={local.salary}
          onChange={(v) =>
            setLocal({ ...local, salary: v as [number, number] })
          }
          label={null}
          styles={{
            bar: { height: 2, backgroundColor: "#000" },
            thumb: {
              width: 12,
              height: 12,
              border: "2px solid #000",
              backgroundColor: "#fff",
            },
            track: { height: 2, backgroundColor: "#E5E7EB" },
          }}
        />
      </div>
    </Paper>
  );
}
