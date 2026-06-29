import Footer from "../components/footer.tsx";
import GridBackground from "../components/grid-background.tsx";
import Navbar from "../components/navbar.tsx";

export default function BaseLayout({
  title,
  url,
  children,
}: {
  title?: string;
  url?: string;
  children?: unknown;
}) {
  const fullTitle = title ? `${title} | Portfolio` : "Portfolio";
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{fullTitle}</title>
          <link rel="stylesheet" href="/styles.css" />
          <link rel="icon" type="image/png" href="/assets/profile.png" />
        </head>
        <body class="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
          <Navbar url={url} />
          <main class="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
            {children}
          </main>
          <GridBackground />
          <Footer />
        </body>
      </html>
    </>
  );
}
