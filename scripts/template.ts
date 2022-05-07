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

const template: Template = ({ componentName, jsx, exports }, { tpl }) => {
  jsx.openingElement.attributes.push(
    ...[
      jsxAttribute(jsxIdentifier('width'), jsxExpressionContainer(identifier('size'))),
      jsxAttribute(jsxIdentifier('height'), jsxExpressionContainer(identifier('size'))),
    ],
  );
  const wrappedJsx = jsxElement(
    jsxOpeningElement(jsxIdentifier('span'), [
      jsxAttribute(
        jsxIdentifier('css'),
        jsxExpressionContainer(callExpression(identifier('iconStyle'), [identifier('props')])),
      ),
      jsxAttribute(jsxIdentifier('className'), stringLiteral('ultra-icon')),
    ]),
    jsxClosingElement(jsxIdentifier('span')),
    [jsx],
    false,
  );

  return tpl`
/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

 /** @jsx jsx */
 import { jsx } from '@emotion/react';
 import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';

interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
};

const defaultProps = {
  size: 24
}

const ${componentName} = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);

  return ${wrappedJsx};
};

${componentName}.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

${exports};

  `;
};

export default template;
