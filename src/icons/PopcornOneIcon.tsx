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

const PopcornOneIcon = (p: SVGComponentProps) => {
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
          d="M7 16h34l-7 28H14L7 16Z"
        />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 16v28m8-28v28" />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M33 9a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 33 9Zm-9 0a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 24 9Zm-9 0a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 15 9Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22.874 9a4 4 0 1 0-7.748 0m17.748 0a4 4 0 1 0-7.748 0M16 16h16M16 44h16"
        />
      </svg>
    </span>
  );
};

PopcornOneIcon.propTypes = {
  size: PropTypes.number,
};
export default PopcornOneIcon;
