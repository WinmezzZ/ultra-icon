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

const MaskOneIcon = (p: SVGComponentProps) => {
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
          strokeWidth={4}
          d="M18 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 12c2.761 0 5-1.343 5-3s-2.239-3-5-3-5 1.343-5 3 2.239 3 5 3Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M11.271 38.142c1.659 1.842 3.638 3.327 5.838 4.34a16.403 16.403 0 0 0 13.78 0c2.2-1.013 4.18-2.498 5.838-4.34m3.908-6.487A21.877 21.877 0 0 0 42 24a21.88 21.88 0 0 0-1.366-7.656m-33.268 0A21.877 21.877 0 0 0 6 24c0 2.712.486 5.297 1.366 7.655M36.727 9.858C35.07 8.015 33.09 6.53 30.89 5.518A16.403 16.403 0 0 0 24 4c-4.97 0-9.47 2.238-12.727 5.858"
        />
      </svg>
    </span>
  );
};

MaskOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MaskOneIcon;
