import lumeCMS from "lume/cms/mod.ts";
import Fs from "lume/cms/storage/fs.ts";

console.log("LOadin cms...");

const cms = lumeCMS();

const storage = Fs.create(Deno.cwd() + "/files");

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

export default cms;
