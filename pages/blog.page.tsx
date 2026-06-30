import PostCard from "./_includes/components/post-card.tsx";
import { formatDateIso } from "./_includes/utils/format-date.ts";

export const title = "Blog";
export const layout = "layouts/base.tsx";

export default function BlogPage({ search }: Lume.Data) {
  const posts = search.pages("type=post", "order=-date");

  return (
    <section class="py-12">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white">
        Blog
      </h1>
      <p class="mt-4 text-zinc-400">Notes and writing about my work.</p>

      <ul class="mt-12 space-y-6">
        {posts.map((post) => (
          <li>
            <PostCard
              title={post.title as string}
              date={formatDateIso(post.date)}
              href={post.url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
