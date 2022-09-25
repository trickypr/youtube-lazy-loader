import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { minify } from "csso";
import closure from "google-closure-compiler";

const cwd = process.cwd();
const dist = `${cwd}/dist`;

if (existsSync(dist)) {
  rmSync(dist, { recursive: true });
}
mkdirSync(dist);

// CSS Minification
{
  const original = `${cwd}/src/yt-lazy.css`;
  const minified = `${dist}/yt-lazy.min.css`;

  const css = readFileSync(original, "utf-8");
  const minifiedCSS = minify(css).css;

  writeFileSync(minified, minifiedCSS);
}

// JS Minification
{
  const { compiler } = closure;
  new compiler({
    js: `${cwd}/src/yt-lazy.js`,
    js_output_file: `${dist}/yt-lazy.min.js`,
    compilation_level: "ADVANCED",
  }).run();
}
