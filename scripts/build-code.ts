import fs from 'fs';
import { rollup } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

fs.rmSync('es', { recursive: true, force: true });

async function build() {
  const bundle = await rollup({
    input: 'src/index.ts',
    plugins: [
      esbuild({
        target: 'esnext',
      }),
    ],
  });

  bundle.write({
    format: 'es',
    dir: 'es',
    preserveModules: true,
  });
}

build();
