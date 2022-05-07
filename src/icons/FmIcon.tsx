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

const FmIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <circle
          cx={24}
          cy={22}
          r={4}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M21.524 33.054c1.238-1.405 3.714-1.405 4.952 0s0 10.307-.825 11.243c-.826.937-2.476.937-3.302 0-.825-.936-2.063-9.838-.825-11.243Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M30.967 30.513A10.978 10.978 0 0 0 35 22c0-6.075-4.925-11-11-11s-11 4.925-11 11c0 3.431 1.571 6.496 4.033 8.513"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M31.926 38.166C37.893 35.235 42 29.096 42 22c0-9.941-8.059-18-18-18S6 12.059 6 22c0 7.097 4.107 13.234 10.074 16.166"
        />
      </svg>
    </span>
  );
};

FmIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FmIcon;
