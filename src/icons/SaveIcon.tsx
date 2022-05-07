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

const SaveIcon = (p: SVGComponentProps) => {
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
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6 9a3 3 0 0 1 3-3h25.281L42 13.207V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
        />
        <path
          fill="#43CCF8"
          fillRule="evenodd"
          d="M24.008 6 24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6"
          clipRule="evenodd"
        />
        <path
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24.008 6 24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6h10.008Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 6h25.281" />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 26h20m-20 8h10.008" />
      </svg>
    </span>
  );
};

SaveIcon.propTypes = {
  size: PropTypes.number,
};
export default SaveIcon;
