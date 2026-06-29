export const title = "Home";
export const layout = "layouts/base.tsx";

export default function HomePage() {
  return (
    <section class="relative py-16 md:py-24 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
      <div class="relative md:col-span-3">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Hi, I'm Genaro Loya Dour
        </h1>
        <p class="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl">
          Professional portfolio built with Lume and Tailwind CSS.
        </p>
        <div class="mt-10">
          <a
            href="/projects/"
            class="inline-block px-6 py-3 bg-white text-zinc-900 font-medium rounded-md hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
      <div class="relative md:col-span-2 flex justify-center md:justify-end">
        <img
          src="/assets/profile.png"
          alt="Genaro Loya Dour"
          class="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-zinc-700"
        />
      </div>
    </section>
  );
}
