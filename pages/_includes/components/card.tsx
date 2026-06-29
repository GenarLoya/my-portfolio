export default function Card({
  href,
  class: className = "",
  children,
}: {
  href?: string;
  class?: string;
  children?: unknown;
}) {
  const base = `rounded-lg border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 ${className}`;

  if (href) {
    return (
      <a href={href} class={`block ${base}`}>
        {children}
      </a>
    );
  }

  return <article class={base}>{children}</article>;
}