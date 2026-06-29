import Section from "./section.tsx";
import { skills } from "../data/skills.ts";

export default function SkillsSection() {
  return (
    <Section title="Conocimientos Técnicos">
      <div class="flex flex-col gap-6">
        {skills.map((group) => (
          <div>
            <h3 class="text-xs uppercase tracking-widest text-zinc-500 mb-3">
              {group.label}
            </h3>
            <div class="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span class="px-2.5 py-1 text-xs rounded-md bg-zinc-800/60 border border-zinc-700 text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
