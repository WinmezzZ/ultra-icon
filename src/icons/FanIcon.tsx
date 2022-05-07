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

const FanIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m14.014 27.755-9.986-3.244a21 21 0 0 1 39.944 0l-9.986 3.244m-19.972 0a10.5 10.5 0 0 1 3.814-5.25m-3.814 5.25L24 31m-6.172-8.495A10.5 10.5 0 0 1 24 20.5m-6.172 2.005L24 31m0-10.5a10.5 10.5 0 0 1 6.172 2.005M24 20.5V31m6.172-8.495a10.5 10.5 0 0 1 3.814 5.25m-3.814-5.25L24 31m9.986-3.245L24 31m0 0v5"
        />
      </svg>
    </span>
  );
};

FanIcon.propTypes = {
  size: PropTypes.number,
};
export default FanIcon;
