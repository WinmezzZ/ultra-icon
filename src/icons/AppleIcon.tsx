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

const AppleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          d="M23.912 11.318c.082-2.232.709-4.192 1.866-5.83 1.163-1.647 3.085-2.817 5.717-3.48.017.08.036.162.055.243v.424c0 .961-.234 2.064-.694 3.276-.482 1.175-1.236 2.28-2.238 3.277-.936.879-1.802 1.46-2.568 1.723-.253.076-.6.15-1.018.217a26.4 26.4 0 0 1-1.12.15Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24.35 14.629c-2.972 0-5.036-2.629-7.968-2.629-2.932 0-8.973 2.695-8.973 12s5.364 15.3 5.964 16c.6.7 1.988 2.5 4.137 2.5 2.15 0 4.504-1.71 6.84-1.71 2.338 0 5.28 1.71 7.2 1.71s2.71-.783 4.017-2.134c1.307-1.35 3.8-5.47 4.67-7.944-1.434-.853-5.234-3.17-5.234-8.422 0-3.5 1.279-6.409 3.838-8.725C37.162 13.092 35.215 12 33 12c-3.324 0-5.678 2.629-8.65 2.629Z"
        />
      </svg>
    </span>
  );
};

AppleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default AppleIcon;
