/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const TriangleRulerIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M44 44 4 4v40h40Z" />
      <path fill="null" fillRule="evenodd" d="M13 35h12L13 23v12Z" clipRule="evenodd" />
      <path fill="null" fillRule="evenodd" d="M13 35h12L13 23v12Z" clipRule="evenodd" />
      <path fill="null" fillRule="evenodd" d="M13 35h12L13 23v12Z" clipRule="evenodd" />
      <path fill="null" fillRule="evenodd" d="M13 35h12L13 23v12Z" clipRule="evenodd" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 35h12L13 23v12Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 35h12L13 23v12Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 35h12L13 23v12Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 35h12L13 23v12Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 44v-3m-6 3v-3m-6 3v-3m-6 3v-3m-8-5h3m-3-6h3m-3-6h3m-3-6h3"
      />
    </svg>
  );
};

TriangleRulerIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TriangleRulerIcon = withWrapper(TriangleRulerIconComponent);
export default TriangleRulerIcon;
