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

const LipTattooIcon = (p: SVGComponentProps) => {
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
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M25 19.89c-1.5-2.52-5.5-2.52-7 0-1.115 1.874-5 4.61-6 5.053C13.667 27.295 19.5 32 25 32c6.5 0 11.167-4.704 13-7.057-1-.443-3.164-2.123-5.5-5.053-2-2.508-6-2.508-7.5 0Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M12 25c3.79.755 14.296 1.811 26 0"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="m39 8.472.343 1.056h1.11l-.898.652.343 1.056-.898-.652-.898.652.343-1.056-.898-.652h1.11L39 8.472Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35 22.656c1.294 1.249 2.374 2.01 3 2.287A20.974 20.974 0 0 1 33.763 29m-17.665-7c-1.543 1.374-3.442 2.652-4.098 2.943.941 1.329 3.211 3.407 6 4.965"
        />
      </svg>
    </span>
  );
};

LipTattooIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default LipTattooIcon;
