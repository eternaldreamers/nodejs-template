import * as esbuild from "esbuild";
import * as path from "path";
import * as glob from "glob";

const sourcePath = path.resolve(__dirname, "src");
const distributionPath = path.resolve(__dirname, "dist");

const entryPoints = glob.globSync("**/*.ts", {
  cwd: sourcePath,
}).map((file) => path.resolve(sourcePath, file));

const buildOptions: esbuild.BuildOptions = {
  entryPoints,
  bundle: true,
  platform: "node",
  outdir: distributionPath,
  external: [],
  format: "cjs",
};

esbuild.build(buildOptions);
