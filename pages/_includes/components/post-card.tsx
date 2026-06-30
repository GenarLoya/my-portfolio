import { formatDateLong } from "../utils/format-date.ts";
import Card from "./card.tsx";

export default function PostCard({
  title,
  date,
  href,
}: {
  title: string;
  date: string;
  href: string;
}) {
  return (
    <Card href={href}>
      {date && <p class="text-sm text-zinc-500">{formatDateLong(date)}</p>}
      <h2 class="mt-1 text-xl font-semibold text-white">{title}</h2>
    </Card>
  );
}
