import Card from "./card.tsx";

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
    <Card href={href} class="flex flex-col">
      <h2 class="text-xl font-semibold text-white">{title}</h2>
      <p class="mt-3 text-zinc-400 flex-1">{description}</p>
      <span class="mt-6 text-sm font-medium text-white">View &rarr;</span>
    </Card>
  );
}