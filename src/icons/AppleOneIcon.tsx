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

const AppleOneIcon = (p: SVGComponentProps) => {
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
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={4}
          d="M24 41.02c2.431 0 3.431 1.31 4.734 1.601 1.303.292 2.397.372 3.517-.121 2.219-.978 3.571-2.142 5.212-3.881C40.505 35.395 42 30.964 42 25.029s-1.6-9.003-4.067-11.009c-2.466-2.006-3.896-2.39-6.878-2.006-2.982.384-4.606 3.588-7.047 3.588-2.44 0-5.415-3.159-8.002-3.588-2.588-.43-4.006 0-6.246 2.006S6 19.15 6 25.03c0 5.878 1.552 10.236 4.593 13.46 1.64 1.739 2.937 3.033 5.155 4.01 1.12.494 2.279.414 3.536.122 1.258-.29 2.258-1.6 4.716-1.6Z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M24.008 15.602C24.793 7.868 28.128 4 34.011 4c.54 1.628.679 3.203.418 4.726-.124.724-.508 1.756-1.153 3.096"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeWidth={4}
          d="M14.23 26c-.277 1.346-.277 2.731 0 4.157.276 1.425.865 2.525 1.766 3.3"
        />
      </svg>
    </span>
  );
};

AppleOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default AppleOneIcon;
