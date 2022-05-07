import fs from 'fs';
import { execSync } from 'child_process';
import { rollup } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

fs.rmSync('es', { recursive: true, force: true });
fs.rmSync('lib', { recursive: true, force: true });

async function build() {
  const bundle = await rollup({
    input: 'src/index.ts',
    plugins: [esbuild()],
    external: id => !/^[./]/.test(id),
  });

  bundle
    .write({
      format: 'es',
      dir: 'es',
      preserveModules: true,
    })
    .then(() => {
      execSync(`cp src/icons.json es`);
    });

  bundle
    .write({
      format: 'cjs',
      dir: 'lib',
      preserveModules: true,
      exports: 'named',
    })
    .then(() => {
      execSync(`cp src/icons.json lib`);
    });
}

build();
