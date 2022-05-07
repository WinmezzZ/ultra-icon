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

const HealthIcon = (p: SVGComponentProps) => {
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
          strokeWidth={4}
          d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        />
        <path
          fill="#43CCF8"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M27.3 12c-1.823 0-3.3 1.435-3.3 3.204 0 3.205 3.9 6.118 6 6.796 2.1-.678 6-3.59 6-6.796C36 13.434 34.523 12 32.7 12a3.326 3.326 0 0 0-2.7 1.362A3.326 3.326 0 0 0 27.3 12Z"
        />
      </svg>
    </span>
  );
};

HealthIcon.propTypes = {
  size: PropTypes.number,
};
export default HealthIcon;
