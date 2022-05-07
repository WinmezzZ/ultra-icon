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

const MaterialThreeIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9 15V9.564c0-.892.087-1.215.25-1.54.164-.327.404-.583.71-.757.305-.174.608-.267 1.444-.267h25.192c.836 0 1.14.093 1.445.267.305.174.545.43.709.756.163.326.25.65.25 1.54V15"
        />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M5 15h38v26H5V15Z" />
        <path fill="#000" fillRule="evenodd" d="M13 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5.569 40.39 14.999 30l5 4 6-7 16.395 13.39"
        />
      </svg>
    </span>
  );
};

MaterialThreeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MaterialThreeIcon;
