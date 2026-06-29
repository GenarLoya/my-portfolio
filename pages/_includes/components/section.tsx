interface SectionProps {
  title: string;
  children: unknown;
}

export default function Section(
  { title, children }: SectionProps,
) {
  return (
    <section class="rounded-lg border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 md:p-8">
      <h2 class="text-xs uppercase tracking-widest text-zinc-500 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
