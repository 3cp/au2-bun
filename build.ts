import { preprocess, preprocessOptions } from '@aurelia/plugin-conventions';
import auPlugin from './auplugin';

await Bun.build({
  entrypoints: ['./src/main.ts'],
  outdir: './dist',
  plugins: [auPlugin],
  sourcemap: "inline",
});
