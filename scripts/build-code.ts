import fs from 'fs';
import { execSync } from 'child_process';
import { rollup } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import pkg from '../package.json';

fs.rmSync('es', { recursive: true, force: true });
fs.rmSync('lib', { recursive: true, force: true });

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-type': 'PropTypes',
};
const external = Object.keys(globals);
// https://www.npmjs.com/package/@rollup/plugin-babel/v/5.2.1#babelhelpers
const esExternals = [...external, /@emotion\/react/, /@babel\/runtime/, ...Object.keys(pkg.dependencies)];

async function build() {
  const bundle = await rollup({
    input: 'src/index.ts',
    plugins: [esbuild()],
    external: esExternals,
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
