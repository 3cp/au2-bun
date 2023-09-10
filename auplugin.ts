import { preprocess, preprocessOptions } from '@aurelia/plugin-conventions';
import { plugin, type BunPlugin } from "bun";
console.log('Load auplugin');

const auPlugin: BunPlugin = {
  name: "Aurelia2 loader",
  async setup(build) {
    const { readFileSync } = await import("fs");

    const allOptions = preprocessOptions({});

    // when a .yaml file is imported...
    build.onLoad({ filter: /\.(html|ts)$/ }, (args) => {

      // read and parse the file
      const text = readFileSync(args.path, "utf8");

      const result = preprocess(
        {
          path: args.path,
          contents: text,
        },
        allOptions
      );

      // console.log('Result', result);
      // and returns it as a module
      return {
        contents: result.code,
        loader: "tsx",
      };
    });
  },
};

plugin(auPlugin);
export default auPlugin;
