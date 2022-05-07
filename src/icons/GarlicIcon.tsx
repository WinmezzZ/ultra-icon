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

const GarlicIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M27 21c0 8 3 6 4 11 1.024 5.123-3.262 10-8.5 10-5.239 0-9.5-4.775-9.5-10 0-4.61 2.5-7.5 5-9s5-3 5-7"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M33 23c1 0 5.5 2 6 7 .452 4.523-2.5 11.5-15 12" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M16.001 40c-7.847 0-11.999-4.703-12-10 0-5.705 8-11 10-12s3-2.952 3-5V9c0-1.38.62-2 2-2h9c1.14 0 2 1 2 2v3c0 2.051 1.27 3.673 3.087 4.578.76.38 1.561.742 2.38 1.077 3.31 1.354 8.533 3.49 8.533 9.345 0 4.881-3.403 9-6 9"
        />
      </svg>
    </span>
  );
};

GarlicIcon.propTypes = {
  size: PropTypes.number,
};
export default GarlicIcon;