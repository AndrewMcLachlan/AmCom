import * as esbuild from "esbuild";

const isProduction = process.argv.includes("--production");
const isWatch = process.argv.includes("--watch");

const options = {
    entryPoints: {
        core: "Scripts/Standard/Core.ts",
        regex: "Scripts/React/entries/regex.tsx",
        cidr: "Scripts/React/entries/cidr.tsx",
        base64: "Scripts/React/entries/base64.tsx",
        colours: "Scripts/React/entries/colours.tsx",
    },
    bundle: true,
    format: "iife",
    target: "es2020",
    outdir: "wwwroot/js",
    entryNames: isProduction ? "[name].min" : "[name]",
    sourcemap: true,
    minify: isProduction,
    jsx: "transform",
    logLevel: "info",
};

if (isWatch) {
    const ctx = await esbuild.context(options);
    await ctx.watch();
    console.log("Watching for changes...");
} else {
    await esbuild.build(options);
}
