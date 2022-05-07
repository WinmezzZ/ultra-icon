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

const ArcDeTriompheIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M8 16v28h10V29a6 6 0 0 1 12 0v15h10V16H8Z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5 10h38v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-3Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M5 4h38M8 4v5m32-5v5M8 28h10m12 0h10" />
      </svg>
    </span>
  );
};

ArcDeTriompheIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ArcDeTriompheIcon;
