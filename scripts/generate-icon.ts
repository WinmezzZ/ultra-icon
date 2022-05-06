import fs from 'fs';
import { transform } from '@svgr/core';
import camelcase from 'camelcase';
import template from './template';

const files = fs.readdirSync('./raw', 'utf-8');

async function buildIcon() {
  files.flatMap(async fileName => {
    const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
      pascalCase: true,
    })}Icon`;
    const svgCode = fs.readFileSync(`./raw/${fileName}`, 'utf-8');

    const content = await transform(
      svgCode,
      {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        icon: false,
        svgProps: {
          width: '24',
          height: '24',
          fill: 'currentColor',
        },
        replaceAttrValues: { '#00497A': "{props.color || '#00497A'}" },
        jsxRuntime: 'automatic',
        typescript: true,
        template: template,
      },
      { componentName: componentName },
    );

    fs.writeFileSync(`src/icons/${componentName}.tsx`, content, 'utf-8');

    fs.writeFileSync(`src/index.ts`, updateEntry(files), 'utf-8');
  });
}

function updateEntry(files: string[]) {
  let content = '';
  files.map(fileName => {
    const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
      pascalCase: true,
    })}Icon`;
    const directoryString = `'./icons/${componentName}'`;
    content += `export { default as ${componentName} } from ${directoryString};\n`;
  });
  return content;
}

buildIcon();
