import Card from "./card.tsx";
import { ImagePlaceholder } from "../icons.tsx";

interface ProjectData {
  title: string;
  repo_url?: string;
  url: string;
  date?: string | Date;
  tags?: string[];
  technologies?: string[];
  cover?: string;
  description?: string;
  excerpt?: string;
}

export default function ProjectCard({
  project,
  href,
}: {
  project: ProjectData;
  href: string;
}) {
  const tags = (project.tags ?? []).slice(0, 3);

  return (
    <Card href={href} class="p-0 overflow-hidden flex flex-col">
      {project.cover ? (
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          class="w-full aspect-video object-cover"
        />
      ) : (
        <div class="rounded-md w-full aspect-video bg-zinc-800/50 flex items-center justify-center">
          <ImagePlaceholder size={48} class="text-zinc-600" />
        </div>
      )}
      <div class="p-5 flex flex-col flex-1">
        <h2 class="text-xl font-semibold text-white">{project.title}</h2>
        {project.excerpt && (
          <p class="mt-3 text-zinc-400 text-sm flex-1 line-clamp-3">
            {project.excerpt}
          </p>
        )}
        {tags.length > 0 && (
          <div class="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span class="px-2 py-0.5 text-[11px] rounded border border-zinc-700 text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        )}
        <span class="mt-6 text-sm font-medium text-white">View &rarr;</span>
      </div>
    </Card>
  );
}
