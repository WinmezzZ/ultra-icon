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

const FingerprintThreeIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M42.43 12.04C37.703 7.382 31.155 4.5 23.92 4.5c-7.193 0-13.707 2.849-18.429 7.457m1.176 17.517v-.057c0-9.573 7.76-17.334 17.333-17.334m7.17 1.547c5.995 2.728 10.163 8.77 10.163 15.787v.013M14.25 37v-7.583c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75V37"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M17.526 43.5c1.963-.485 3.224-2.554 3.224-4.304V30.5a3.25 3.25 0 0 1 6.5 0v8.696"
        />
      </svg>
    </span>
  );
};

FingerprintThreeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FingerprintThreeIcon;
