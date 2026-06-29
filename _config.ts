import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume({
  src: "./pages",
});

site.use(jsx());
site.use(tailwindcss());
site.add("styles.css");
site.add("assets");
site.add([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);

export default site;
