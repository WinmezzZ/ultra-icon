import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { transform } from '@svgr/core';
import camelcase from 'camelcase';
import template from './template';

const files = glob.sync('raw/**/*.svg');

async function buildIcon() {
  files.forEach(async (fullName, index) => {
    const fileName = path.basename(fullName);
    const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
      pascalCase: true,
    })}Icon`;
    const svgCode = fs.readFileSync(fullName, 'utf-8');

    console.log(`Number ${index + 1}: start transform...`);

    const content = await transform(
      svgCode,
      {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        icon: false,
        svgProps: {
          fill: 'currentColor',
        },
        replaceAttrValues: { '#00497A': "{props.color || '#00497A'}" },
        jsxRuntime: 'automatic',
        typescript: true,
        template: template,
      },
      { componentName: componentName },
    );

    console.log(`Number ${index + 1}: Start write file...`);
    fs.writeFileSync(`src/icons/${componentName}.tsx`, content, 'utf-8');

    console.log(`Number ${index + 1}: Start upadte to entry...`);
    fs.writeFileSync(`src/index.ts`, updateEntry(files), 'utf-8');
  });
}

function updateEntry(files: string[]) {
  let content = '';
  files.map(fullName => {
    const fileName = path.basename(fullName);
    const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
      pascalCase: true,
    })}Icon`;
    const directoryString = `'./icons/${componentName}'`;
    content += `export { default as ${componentName} } from ${directoryString};\n`;
  });
  return content;
}

buildIcon();
