export default function Navbar({ url }: { url?: string }) {
  // Active link is the one whose href matches the current pathname.
  const currentPath = url ?? "/";
  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath.startsWith(href);
  };

  const linkBase =
    "px-3 py-2 text-sm font-medium transition-colors hover:text-white";
  const active = "text-white border-b-2 border-white";
  const inactive = "text-zinc-400";

  return (
    <header class="sticky top-0 z-50 bg-zinc-900 backdrop-blur border-b border-zinc-800">
      <nav class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" class="hover:opacity-80 transition-opacity">
          <img
            src="/assets/profile.png"
            alt="Genaro Loya Dour"
            class="h-8 w-8 rounded-full"
          />
        </a>
        <ul class="flex items-center gap-2">
          <li>
            <a
              href="/"
              class={`${linkBase} ${isActive("/") ? active : inactive}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects/"
              class={`${linkBase} ${isActive("/projects") ? active : inactive}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/blog/"
              class={`${linkBase} ${isActive("/blog") ? active : inactive}`}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
