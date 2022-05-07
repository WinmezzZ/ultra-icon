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

const CakeFourIcon = (p: SVGComponentProps) => {
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
        <path
          stroke="#000"
          strokeWidth={4}
          d="m6 25 5.171 15.628A2 2 0 0 0 13.07 42h21.86a2 2 0 0 0 1.899-1.372L42 25"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.407 25.123h-5.09a.312.312 0 0 1-.313-.318C6.164 17.782 11.634 11.885 19 10h10c7.077 2.036 12.823 7.958 12.996 14.806a.31.31 0 0 1-.313.317h-5.09a9.56 9.56 0 0 0-6.297 2.366 9.56 9.56 0 0 1-12.592 0 9.56 9.56 0 0 0-6.297-2.366Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19.1 10a5 5 0 1 1 9.8 0" />
      </svg>
    </span>
  );
};

CakeFourIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CakeFourIcon;
