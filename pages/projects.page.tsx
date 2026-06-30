import ProjectCard from "./_includes/components/project-card.tsx";

export const title = "Projects";
export const layout = "layouts/base.tsx";

function resolveCover(
  cover: unknown,
  docUrl: string,
): string | undefined {
  if (typeof cover !== "string" || cover.length === 0) return undefined;
  if (cover.startsWith("./")) {
    const base = docUrl.endsWith("/") ? docUrl : docUrl + "/";
    return base + cover.slice(2);
  }
  return cover;
}

export default function ProjectsPage(props: Lume.Data) {
  const projects = props.search.pages("type=project", "order=-date");

  return (
    <section class="py-12">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white">
        Projects
      </h1>
      <p class="mt-4 text-zinc-400">
        A selection of recent work and side projects.
      </p>

      {projects.length === 0
        ? (
          <p class="mt-12 text-zinc-500">
            No projects yet.
          </p>
        )
        : (
          <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                href={project.url}
                project={{
                  title: project.title as string,
                  url: project.url,
                  date: project.date as unknown as string | undefined,
                  tags: project.tags as string[] | undefined,
                  technologies: project.technologies as string[] | undefined,
                  cover: resolveCover(project.cover, project.url),
                  excerpt: project.excerpt as string | undefined,
                  repo_url: project.repo_url as string | undefined,
                }}
              />
            ))}
          </div>
        )}
    </section>
  );
}
