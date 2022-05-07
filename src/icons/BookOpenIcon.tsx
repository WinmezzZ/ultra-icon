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

const BookOpenIcon = (p: SVGComponentProps) => {
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
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5 7h11a8 8 0 0 1 8 8v27a6 6 0 0 0-6-6H5V7Zm38 0H32a8 8 0 0 0-8 8v27a6 6 0 0 1 6-6h13V7Z"
        />
      </svg>
    </span>
  );
};

BookOpenIcon.propTypes = {
  size: PropTypes.number,
};
export default BookOpenIcon;