import ProjectCard from "./_includes/components/project-card.tsx";

export const title = "Projects";
export const layout = "layouts/base.tsx";

const projects = [
  {
    title: "Alpha",
    description: "A short description of project alpha.",
    href: "#",
  },
  {
    title: "Beta",
    description: "A short description of project beta.",
    href: "#",
  },
  {
    title: "Gamma",
    description: "A short description of project gamma.",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section class="py-12">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white">
        Projects
      </h1>
      <p class="mt-4 text-zinc-400">
        A selection of recent work and side projects.
      </p>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}
