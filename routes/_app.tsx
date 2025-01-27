import { type PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Genarold</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="mx-12 felx flex-col space-y-4">
        <Header />
        <Component />
      </body>
    </html>
  );
}
