import Hero from "./_includes/components/hero.tsx";
import ProfileSection from "./_includes/components/profile-section.tsx";
import SkillsSection from "./_includes/components/skills-section.tsx";
import TimelineSection from "./_includes/components/timeline-section.tsx";

export const title = "Home";
export const layout = "layouts/base.tsx";

export default function HomePage() {
  return (
    <div class="space-y-12">
      <Hero />

      <div class="grid grid-cols-1 md:grid-cols-[20rem_1fr] gap-8 items-start">
        <aside class="md:sticky md:top-20 self-start order-2 md:order-1">
          <SkillsSection />
        </aside>

        <div class="flex flex-col gap-12 order-1 md:order-2">
          <ProfileSection />
          <TimelineSection />
        </div>
      </div>
    </div>
  );
}
