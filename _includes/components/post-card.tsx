export default function PostCard({
  title,
  date,
  href,
}: {
  title: string;
  date: string;
  href: string;
}) {
  return (
    <li class="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
      <a
        href={href}
        class="text-lg font-semibold text-white hover:text-zinc-300"
      >
        {title}
      </a>
      <p class="mt-2 text-sm text-zinc-500">{date}</p>
    </li>
  );
}
