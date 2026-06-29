export default function ProjectCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article class="rounded-lg border border-zinc-800 bg-zinc-900 p-6 flex flex-col">
      <h2 class="text-xl font-semibold text-white">{title}</h2>
      <p class="mt-3 text-zinc-400 flex-1">{description}</p>
      <a
        href={href}
        class="mt-6 text-sm font-medium text-white hover:text-zinc-300"
      >
        View &rarr;
      </a>
    </article>
  );
}
