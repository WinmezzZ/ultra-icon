import { jsxExpressionContainer, stringLiteral } from '@babel/types';
import {
  jsxAttribute,
  identifier,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  callExpression,
} from '@babel/types';
import { transform } from '@svgr/core';

type Template = NonNullable<Parameters<typeof transform>['1']>['template'];

const template: Template = ({ componentName, jsx }, { tpl }) => {
  jsx.openingElement.attributes.push(
    ...[
      jsxAttribute(jsxIdentifier('width'), jsxExpressionContainer(identifier('size'))),
      jsxAttribute(jsxIdentifier('height'), jsxExpressionContainer(identifier('size'))),
    ],
  );
  return tpl`
/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';

interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
};

const ${componentName + `Component`} = (p: SVGComponentProps) => {
  const {size, ...props} = p;

  return ${jsx};
};

${componentName + `Component`}.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const ${componentName} = withWrapper(${componentName + `Component`});

export default ${componentName};
  `;
};

export default template;
