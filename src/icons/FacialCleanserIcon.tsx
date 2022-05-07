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

const FacialCleanserIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 34v10h18V34" />
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M31.935 4h-15.95C9.043 4 8.514 8.605 9.25 11.04L14.989 34h17.942s4.644-17.817 5.888-22.96c.589-2.435.09-7.057-6.884-7.04Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20.488 19.09c1.64-1.944 2.903-4.631 3.586-6.09 1.196 1.459 3.792 5.118 4.612 7.063 1.025 2.432-1.537 5.35-4.612 5.35-3.074 0-5.636-3.89-3.586-6.322Z"
        />
      </svg>
    </span>
  );
};

FacialCleanserIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FacialCleanserIcon;
