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
}
const defaultProps = {
  size: 24,
};

const SpaceColonyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M42 43V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v18" />
        <path stroke="#000" strokeWidth={4} d="M24 22c-9.941 0-18 8.059-18 18v4h36v-4c0-9.941-8.059-18-18-18Z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M8 31V8m8 16V14" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M31 14h11" />
        <path stroke="#000" strokeWidth={4} d="M17 42v-3c0-9.389 3.134-17 7-17s7 7.611 7 17v3" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40" />
        <path stroke="#000" strokeWidth={4} d="M7 35s10.35-1 17-1 17 1 17 1" />
      </svg>
    </span>
  );
};

SpaceColonyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SpaceColonyIcon;
