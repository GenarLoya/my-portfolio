import { name, role, contact } from "../data/profile.ts";
import { Github, Mail, Linkedin } from "../icons.tsx";

export default function Hero() {
  return (
    <section class="relative py-8 md:py-12 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
      <div class="relative md:col-span-3">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white">
          {name}
        </h1>
        <p class="mt-4 text-lg md:text-xl text-zinc-300 max-w-2xl">
          {role}
        </p>
        <ul class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
          <li>
            <a
              href={`mailto:${contact.email}`}
              class="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={16} class="size-4 text-zinc-500" />
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github size={16} class="size-4 text-zinc-500" />
              {contact.github}
            </a>
          </li>
          <li>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin size={16} class="size-4 text-zinc-500" />
              {contact.linkedin}
            </a>
          </li>
        </ul>
        <div class="mt-10">
          <a
            href="/projects/"
            class="inline-block px-6 py-3 bg-white text-zinc-900 font-medium rounded-md hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
      <div class="relative md:col-span-2 flex justify-center md:justify-end">
        <img
          src="/assets/profile.png"
          alt={name}
          class="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-zinc-700"
        />
      </div>
    </section>
  );
}
