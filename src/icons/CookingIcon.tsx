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
const CookingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 42h36M6 36h36" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9 25c0-8.284 6.716-15 15-15v0c8.284 0 15 6.716 15 15v11H9V25Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M17 25v4" />
      <path stroke="#000" strokeWidth={4} d="M28 10V8a4 4 0 0 0-8 0v2" />
    </svg>
  );
};

CookingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CookingIcon = withWrapper(CookingIconComponent);
export default CookingIcon;
