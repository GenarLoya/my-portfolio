import BaseLayout from "./base.tsx";
import Card from "../components/card.tsx";
import GridBackground from "../components/grid-background.tsx";
import { Camera, Empty, Github, ImagePlaceholder } from "../icons.tsx";

export default function ProjectLayout({
  title,
  repo_url,
  date,
  tags,
  technologies,
  cover,
  gallery,
  children,
}: Lume.Data) {
  const tagList = Array.isArray(tags) ? tags : [];
  const techList = Array.isArray(technologies) ? technologies : [];
  const galleryList = Array.isArray(gallery) ? gallery : [];

  return (
    <BaseLayout title={title}>
      <article class="relative py-12 w-full">
        <GridBackground />

        <div class="grid grid-cols-1 md:grid-cols-[18rem_1fr] gap-8 items-start">
          <aside class="md:sticky md:top-12 self-start relative">
            {cover ? (
              <Card class="justify-self-center">
                <img
                  src={cover as string}
                  alt={title as string}
                  class="w-full rounded-lg relative"
                  onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.classList.add('opacity-50');this.insertAdjacentHTML('afterend','<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%2371717a\\' stroke-width=\\'1.5\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' class=\\'text-zinc-600\\' style=\\'position:absolute;inset:0;margin:auto;pointer-events:none\\'><rect width=\\'18\\' height=\\'18\\' x=\\'3\\' y=\\'3\\' rx=\\'2\\' ry=\\'2\\'/><circle cx=\\'9\\' cy=\\'9\\' r=\\'2\\'/><path d=\\'m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\\'/></svg>');}"
                />
              </Card>
            ) : (
              <div class="w-full aspect-video rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex items-center justify-center">
                <ImagePlaceholder size={56} class="text-zinc-600" />
              </div>
            )}
          </aside>

          <div>
            <header class="mb-8">
              {date && (
                <p class="text-sm text-zinc-500">
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              )}
              {title && (
                <h1 class="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">
                  {title}
                </h1>
              )}
              {repo_url && (
                <a
                  href={repo_url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  <Github size={16} class="size-4" />
                  View repo
                </a>
              )}
            </header>

            <Card class="w-full">{children}</Card>

            {(tagList.length > 0 || techList.length > 0) && (
              <Card class="w-full mt-6">
                {tagList.length > 0 && (
                  <div class="mb-4">
                    <h2 class="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                      Tags
                    </h2>
                    <div class="flex flex-wrap gap-2">
                      {tagList.map((tag) => (
                        <span class="px-2.5 py-1 text-xs rounded-md border border-zinc-700 text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {techList.length > 0 && (
                  <div>
                    <h2 class="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                      Technologies
                    </h2>
                    <div class="flex flex-wrap gap-2">
                      {techList.map((tech) => (
                        <span class="px-2.5 py-1 text-xs rounded-md bg-zinc-800 text-white border border-zinc-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            )}

            <section class="mt-8">
              <h2 class="text-xs uppercase tracking-widest text-zinc-500 mb-4 px-6">
                Screenshots
              </h2>
              {galleryList.length > 0 ? (
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {galleryList.map((img, i) => (
                    <Card class="justify-self-center">
                      <img
                        src={img as string}
                        alt={`${title as string} screenshot ${i + 1}`}
                        loading="lazy"
                        class="block aspect-square max-h-full rounded-lg cursor-zoom-in"
                        onclick="window.__openLightbox && window.__openLightbox(this)"
                        onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.classList.add('opacity-60');this.insertAdjacentHTML('afterend','<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'64\\' height=\\'64\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%2371717a\\' stroke-width=\\'1.5\\' stroke-linecap=\\'round\\' stroke-linejoin\\'=round\\' class=\\'text-zinc-600\\' style=\\'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none\\'><rect width=\\'18\\' height=\\'18\\' x=\\'3\\' y=\\'3\\' rx=\\'2\\' ry=\\'2\\'/><circle cx=\\'9\\' cy=\\'9\\' r=\\'2\\'/><path d=\\'m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\\'/></svg>');}"
                      />
                    </Card>
                  ))}
                </div>
              ) : (
                <Card class="w-full">
                  <Empty
                    title="No screenshots yet"
                    description="This proyect doesn't have any screenshots yet."
                    icon={<Camera size={28} />}
                  />
                </Card>
              )}
            </section>
          </div>
        </div>
      </article>
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.__lightboxInit ||= (() => {
  if (window.__openLightbox) return true;
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 z-50 hidden bg-black cursor-zoom-out';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = '<button type="button" aria-label="Close" class="absolute top-4 right-4 z-10 text-zinc-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button><img alt="" class="absolute inset-0 w-full h-full object-cover" />';
  document.body.appendChild(overlay);
  const img = overlay.querySelector('img');
  const close = () => overlay.classList.replace('flex', 'hidden');
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  window.__openLightbox = (trigger) => {
    if (!trigger || trigger.dataset.fallback) return;
    img.src = trigger.src;
    img.alt = trigger.alt || '';
    overlay.classList.replace('hidden', 'flex');
  };
  return true;
})();
window.__lightboxInit();
          `.trim(),
        }}
      ></script>
    </BaseLayout>
  );
}
