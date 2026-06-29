import Section from "./section.tsx";
import { type TimelineItem, timeline } from "../data/timeline.ts";

export default function TimelineSection() {
  return (
    <Section title="Experiencia & Educación">
      <ol class="relative space-y-8">
        <span
          class="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-700"
          aria-hidden="true"
        >
        </span>
        {timeline.map((item) => <TimelineRow item={item} />)}
      </ol>
    </Section>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  return (
    <li class="relative pl-8">
      <span
        class="absolute left-0 top-3 size-3.5 rounded-full bg-zinc-100 border-2 border-zinc-900"
        aria-hidden="true"
      >
      </span>

      <div class="grid grid-cols-1 md:grid-cols-[6rem_1fr] md:gap-x-6">
        <p class="text-xs uppercase tracking-widest text-zinc-500 pt-1.5">
          {item.period}
        </p>

        <div>
          <h3 class="text-lg font-semibold text-white leading-snug">
            {item.title}
            <span class="text-zinc-400 font-normal"> — {item.org}</span>
          </h3>
          <p class="mt-1 text-sm text-zinc-500">{item.location}</p>

          {item.bullets && item.bullets.length > 0 && (
            <ul class="mt-4 space-y-3 list-disc list-outside pl-5 text-zinc-300">
              {item.bullets.map((bullet) => <li>{bullet}</li>)}
            </ul>
          )}

          {item.note && <p class="mt-4 text-sm text-zinc-400">{item.note}</p>}

          {item.kind === "education" && !item.note && (
            <p class="mt-4 text-sm text-zinc-500 italic">En curso</p>
          )}
        </div>
      </div>
    </li>
  );
}
