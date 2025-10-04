"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchJobs } from "@/lib/api";
import {
  Container,
  Group,
  Button,
  SimpleGrid,
  Paper,
  Skeleton,
  Modal,
} from "@mantine/core";
import FiltersBar, { Filters } from "@/components/FiltersBar";
import JobCard from "@/components/JobCard";
import CreateJobForm from "@/components/CreateJobForm";
import styles from "@/components/NavLink.module.css";
import createStyles from "@/components/Create.module.css";

{
  [
    { label: "Home", href: "/jobs" },
    { label: "Find Jobs", href: "/jobs" },
    { label: "Find Talents", href: "/jobs" },
    { label: "About us", href: "/jobs" },
    { label: "Testimonials", href: "/jobs" },
  ].map((link) => (
    <Link key={link.label} href="/jobs" className={styles.navLink}>
      {link.label}
    </Link>
  ));
}

export default function JobsClient() {
  const [filters, setFilters] = useState<Filters>({
    title: "",
    location: "",
    jobType: null,
    salary: [100000, 4000000],
  });

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchJobs({
      title: filters.title,
      location: filters.location,
      jobType: filters.jobType || undefined,
      salary: filters.salary,
    })
      .then((res) => {
        setJobs(
          res.sort((a: any, b: any) =>
            (b.createdAt || "").localeCompare(a.createdAt || "")
          )
        );
      })
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div style={{ background: "#F6F8FB", minHeight: "100dvh" }}>
      {/* Top Section */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "white", // ✅ unified background
          boxShadow: "0 2px 8px rgba(16,24,40,0.06)",
        }}
      >
        {/* Floating Navbar Box */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "6px 0 10px 0",
          }}
        >
          <Paper
            radius="lg"
            withBorder
            px="md"
            py={8}
            style={{
              background: "white",
              borderColor: "#EEF2F7",
              boxShadow: "0 4px 12px rgba(16,24,40,0.06)", // ✅ floating effect
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            {/* Logo */}
            <Link
              href="https://www.cybermindworks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: "40px", objectFit: "contain" }}
              />
            </Link>
            {/* Links */}
            <Group
              gap="sm"
              style={{
                flex: "1 1 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { label: "Home", href: "/jobs" },
                { label: "Find Jobs", href: "/jobs" },
                { label: "Find Talents", href: "/jobs" },
                { label: "About us", href: "/jobs" },
                { label: "Testimonials", href: "/jobs" },
              ].map((link) => (
                <Link key={link.label} href="/jobs" className={styles.navLink}>
                  {link.label}
                </Link>
              ))}

              {/* Create Jobs button */}
              <Button
                radius="xl"
                onClick={() => setOpened(true)}
                styles={{
                  root: {
                    background: "linear-gradient(90deg, #7B1FA2, #D100D1)",
                    boxShadow: "0 4px 12px rgba(75, 0, 130, 0.35)",
                    fontSize: "13px",
                    fontWeight: 500,
                    paddingInline: "12px",
                    height: "30px",
                    transition: "all 0.3s ease",
                  },
                }}
                className={createStyles.createButton}
              >
                Create Jobs
              </Button>
            </Group>
          </Paper>
        </div>

        {/* Filters Bar */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Container size="lg" py={0} px={0}>
            <FiltersBar value={filters} onChange={setFilters} />
          </Container>
        </div>
      </div>

      {/* Jobs Grid */}
      <Container size="lg" py={4} px={0} style={{ marginTop: "16px" }}>
        <SimpleGrid
          spacing="xs"
          verticalSpacing={45}
          cols={{ base: 1, sm: 2, lg: 4 }}
        >
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <Paper
                  key={i}
                  p="sm"
                  radius="lg"
                  withBorder
                  style={{
                    background: "white",
                    borderColor: "#EEF2F7",
                    boxShadow: "0 4px 14px rgba(16,24,40,0.05)",
                    margin: 0,
                  }}
                >
                  <Skeleton height={120} />
                </Paper>
              ))
            : jobs.map((j) => <JobCard key={j.id} job={j} />)}
        </SimpleGrid>
      </Container>

      {/* Create Job Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="lg"
        radius="lg"
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <CreateJobForm
          onClose={() => setOpened(false)}
          onSuccess={(newJob: any) => {
            setJobs((prev) =>
              [newJob, ...prev].sort((a, b) =>
                (b.createdAt || "").localeCompare(a.createdAt || "")
              )
            );
          }}
        />
      </Modal>
    </div>
  );
}
