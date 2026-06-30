type DateInput = Date | string | undefined;

function toDate(value: DateInput): Date | null {
  if (value === undefined || value === null || value === "") return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Formats a date in UTC to avoid timezone shifts.
 *
 * Example: an entry with `date: 2026-06-30` (parsed as UTC midnight) would
 * otherwise render as "Jun 29" for users in UTC-6 timezones because
 * `Date.toLocaleDateString()` formats in local time.
 */
export function formatDateLong(value: DateInput): string {
  const d = toDate(value);
  if (!d) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
}

/** YYYY-MM-DD in UTC. */
export function formatDateIso(value: DateInput): string {
  const d = toDate(value);
  if (!d) return "";
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}