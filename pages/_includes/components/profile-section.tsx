import Section from "./section.tsx";
import { profileCopy } from "../data/profile-copy.ts";

export default function ProfileSection() {
  return (
    <Section title="Perfil Profesional">
      <p class="text-zinc-300 leading-relaxed text-pretty">
        {profileCopy}
      </p>
    </Section>
  );
}
