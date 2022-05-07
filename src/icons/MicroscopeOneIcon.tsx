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

const MicroscopeOneIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="m29.003 18.373 1.105-1.104.53-.53a5.5 5.5 0 0 0 0-7.779v0a5.5 5.5 0 0 0-7.778 0L9.172 22.648a.143.143 0 0 0 0 .202l6.97 6.97a1 1 0 0 0 1.414 0l3.713-3.712 1.105-1.105"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m28.163 6.485 1.768-1.768a3.5 3.5 0 1 1 4.95 4.95l-1.768 1.768-4.95-4.95Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m10.485 24.163-4.242 4.243 4.95 4.95 4.242-4.243-4.95-4.95Z"
        />
        <circle
          cx={26.042}
          cy={22.042}
          r={4.5}
          fill="null"
          stroke="#000"
          strokeWidth={4}
          transform="rotate(45 26.042 22.042)"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m6 20 12.728 12.728M10 44h32M31 22c4 0 8 4 8 10 0 6.4-5.167 9.833-8 12"
        />
      </svg>
    </span>
  );
};

MicroscopeOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MicroscopeOneIcon;
