import BaseLayout from "./base.tsx";
import Card from "../components/card.tsx";

export default function PostLayout({ title, date, children }: Lume.Data) {
  return (
    <BaseLayout title={title}>
      <article class="py-12 w-full">
        <header class="mb-8">
          {date && <p class="text-sm text-zinc-500">{date}</p>}
          {title && (
            <h1 class="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">
              {title}
            </h1>
          )}
        </header>

        <Card class="w-full">
          <div class="text-zinc-300 leading-relaxed">{children}</div>
        </Card>
      </article>
    </BaseLayout>
  );
}
