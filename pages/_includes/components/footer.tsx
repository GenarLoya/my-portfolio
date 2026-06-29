import { contact } from "../data/profile.ts";
import { Github, Linkedin, Mail } from "../icons.tsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="border-t border-zinc-800 py-8 mt-12 bg-zinc-900/90">
      <div class="max-w-6xl mx-auto px-6 text-sm text-zinc-400">
        <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p>&middot; {year} &middot;</p>

          <ul class="flex flex-wrap items-center justify-center gap-x-5">
            <li>
              <a
                href={`mailto:${contact.email}`}
                class="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label={`Email ${contact.email}`}
              >
                <Mail size={16} class="size-4 text-zinc-500" />
                <span class="hidden sm:inline">{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label={`GitHub ${contact.github}`}
              >
                <Github size={16} class="size-4 text-zinc-500" />
                <span class="hidden sm:inline">{contact.github}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label={`LinkedIn profile`}
              >
                <Linkedin size={16} class="size-4 text-zinc-500" />
                <span class="hidden sm:inline">linkedin.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
