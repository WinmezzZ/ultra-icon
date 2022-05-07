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

const DiskIcon = (p: SVGComponentProps) => {
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
          d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"
        />
        <path fill="#43CCF8" stroke="#fff" strokeLinejoin="round" strokeWidth={4} d="M34 4v18H15V4h19Z" />
        <path stroke="#fff" strokeLinecap="round" strokeWidth={4} d="M29 11v4" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M11.997 4h25.002" />
      </svg>
    </span>
  );
};

DiskIcon.propTypes = {
  size: PropTypes.number,
};
export default DiskIcon;
