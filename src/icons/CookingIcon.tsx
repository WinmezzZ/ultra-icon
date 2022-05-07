/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const CookingIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 42h36M6 36h36" />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9 25c0-8.284 6.716-15 15-15v0c8.284 0 15 6.716 15 15v11H9V25Z"
        />
        <path stroke="#fff" strokeLinecap="round" strokeWidth={4} d="M17 25v4" />
        <path stroke="#000" strokeWidth={4} d="M28 10V8a4 4 0 0 0-8 0v2" />
      </svg>
    </span>
  );
};

CookingIcon.propTypes = {
  size: PropTypes.number,
};
export default CookingIcon;