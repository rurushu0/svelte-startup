import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import livereload from "rollup-plugin-livereload";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
    compact: true,
  },
  plugins: [
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),

    svelte({
      dev: !production,
      include: "src/**/*.svelte",
      css: (css) => {
        css.write("public/style.css", false);
      },
    }),

    !production && livereload("public"),
  ],
};
