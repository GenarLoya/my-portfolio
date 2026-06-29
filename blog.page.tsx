import PostCard from "./_includes/components/post-card.tsx";

export const title = "Blog";
export const layout = "layouts/base.tsx";

const posts = [
  {
    title: "First Post",
    date: "2026-06-28",
    href: "/blog/first-post/",
  },
];

export default function BlogPage() {
  return (
    <section class="py-12">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white">
        Blog
      </h1>
      <p class="mt-4 text-zinc-400">
        Notes and writing about my work.
      </p>

      <ul class="mt-12 space-y-6">
        {posts.map((post) => (
          <PostCard title={post.title} date={post.date} href={post.href} />
        ))}
      </ul>
    </section>
  );
}
