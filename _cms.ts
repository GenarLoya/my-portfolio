import lumeCMS from "lume/cms/mod.ts";
import Fs from "lume/cms/storage/fs.ts";
import { css as loginCss, gridHtml } from "./login/login-bg.ts";

const cms = lumeCMS();

const storage = Fs.create("./pages");

cms.storage("src", storage);

cms.collection({
  name: "posts",
  description: "Blog posts",
  store: "src:posts/*.md",
  fields: [
    "title: text",
    "date: datetime",
    "type: hidden",
    { name: "content", type: "markdown" },
  ],
});

const adminUser = Deno.env.get("CMS_USERNAME") ?? "admin";
const adminPassword = Deno.env.get("CMS_PASSWORD");

if (!adminPassword) {
  throw new Error(
    "CMS_PASSWORD env is required (set CMS_USERNAME and CMS_PASSWORD in .env)",
  );
}

const provider: {
  options?: { basePath: string; users: Map<string, { password?: string }> };
} = {};

cms.auth(
  { [adminUser]: { password: adminPassword } },
  {
    init(options) {
      provider.options = options;
    },
    login(request) {
      const cookie = request.headers.get("cookie") ?? "";
      const user = cookie.match(/session=([^;]+)/)?.[1];
      if (user && provider.options!.users.has(user)) return user;

      const basePath =
        provider.options!.basePath === "/" ? "" : provider.options!.basePath;
      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login — Genaro Loya Dour</title>
  <link rel="icon" href="/assets/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <style>${loginCss}
    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
      color: #e4e4e7;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem 1.5rem;
    }
    .login-card {
      width: 100%;
      max-width: 26rem;
      background: rgba(24, 24, 27, 0.7);
      border: 1px solid #27272a;
      border-radius: 0.5rem;
      padding: 2rem;
      backdrop-filter: blur(8px);
    }
    h1 {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #ffffff;
    }
    .sub { margin: 0 0 1.5rem; font-size: 0.875rem; color: #a1a1aa; }
    label {
      display: block;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #a1a1aa;
      margin-bottom: 0.375rem;
    }
    input {
      display: block;
      width: 100%;
      padding: 0.625rem 0.75rem;
      margin-bottom: 1.25rem;
      background: #18181b;
      color: #fafafa;
      border: 1px solid #3f3f46;
      border-radius: 0.375rem;
      font: inherit;
      font-size: 0.875rem;
    }
    input:focus {
      outline: none;
      border-color: #fafafa;
      box-shadow: 0 0 0 2px rgba(250, 250, 250, 0.2);
    }
    button {
      width: 100%;
      padding: 0.625rem 1rem;
      background: #fafafa;
      color: #18181b;
      border: 0;
      border-radius: 0.375rem;
      font: inherit;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 150ms;
    }
    button:hover { background: #e4e4e7; }
    footer {
      text-align: center;
      padding: 1.5rem;
      font-size: 0.75rem;
      color: #71717a;
    }
  </style>
</head>
<body>
  <div class="ghg-wrap" aria-hidden="true">${gridHtml()}</div>
  <main>
    <form method="POST" action="${basePath}/auth/login" class="login-card">
      <h1>CMS Login</h1>
      <p class="sub">Restricted area — sign in to edit content.</p>
      <label for="user">Username</label>
      <input id="user" name="user" autofocus autocomplete="username" required>
      <label for="password">Password</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
      <button type="submit">Sign in</button>
    </form>
  </main>
  <footer>&copy; Genaro Loya Dour</footer>
</body>
</html>`,
        { headers: { "content-type": "text/html; charset=utf-8" } },
      );
    },
    async fetch(request) {
      const url = new URL(request.url);
      if (url.pathname.endsWith("/login") && request.method === "POST") {
        const data = await request.formData();
        const user = data.get("user")?.toString() ?? "";
        const password = data.get("password")?.toString() ?? "";
        const config = provider.options!.users.get(user);

        if (config && config.password === password) {
          return new Response(null, {
            status: 302,
            headers: {
              location: provider.options!.basePath,
              "set-cookie": `session=${user}; path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,
            },
          });
        }

        return new Response("Invalid credentials", {
          status: 401,
          headers: { "content-type": "text/plain" },
        });
      }
      return new Response("Not found", { status: 404 });
    },
    logout() {
      return new Response(null, {
        status: 302,
        headers: {
          location: provider.options!.basePath,
          "set-cookie":
            "session=; path=/; HttpOnly; SameSite=Strict; Max-Age=0",
        },
      });
    },
  },
);

export default cms;
