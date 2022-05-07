/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const SorcererHatIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 40c11.046 0 20-1.79 20-4 0-1.439-3.299-2.7-9-3.405L27 12 15 8l3 6-5 18.595C7.299 33.3 4 34.56 4 36c0 2.21 8.954 4 20 4Z"
        />
      </svg>
    </span>
  );
};

SorcererHatIcon.propTypes = {
  size: PropTypes.number,
};
export default SorcererHatIcon;
