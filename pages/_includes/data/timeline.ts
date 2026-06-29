import { experience } from "./experience.ts";
import { education } from "./education.ts";

export type TimelineItem = {
  kind: "work" | "education";
  period: string;
  startYear: number;
  endYear: number | null;
  title: string;
  org: string;
  location: string;
  note?: string;
  bullets?: string[];
};

export const timeline: TimelineItem[] = ([
  {
    kind: "work" as const,
    period: experience.period,
    startYear: 2023,
    endYear: null,
    title: experience.role,
    org: experience.company,
    location: experience.location,
    bullets: experience.bullets,
  },
  {
    kind: "education" as const,
    period: education.period,
    startYear: 2020,
    endYear: 2025,
    title: education.degree,
    org: education.school,
    location: education.location,
    note: education.note,
  },
]).sort((a, b) => {
  const aY = a.endYear ?? 9999;
  const bY = b.endYear ?? 9999;
  if (aY !== bY) return bY - aY;
  return b.startYear - a.startYear;
});
