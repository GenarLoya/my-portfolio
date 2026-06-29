export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="border-t border-zinc-800 py-6 mt-12 bg-zinc-900/90">
      <div class="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-400">
        <p>
          {year} &middot; Built with Lume + Tailwind
        </p>
      </div>
    </footer>
  );
}