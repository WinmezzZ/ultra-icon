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

const LandscapeIcon = (p: SVGComponentProps) => {
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
          d="M14 28c3 0 12.5 1.5 12.5 5s-5.106 2.739-7.5 3c-2.073 0-7 0-7 3 0 4 20.545 5 24.5 5"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M31 15c0-4.267-4.27-11-10.195-11-5.925 0-10.472 8-12.26 15.467C6.757 26.933 7.013 36 7.013 36M26 24c0-2.5 1.4-7 6-7 4 0 6.2 4.042 7 7.5.8 3.458 1 8.5 1 8.5"
        />
      </svg>
    </span>
  );
};

LandscapeIcon.propTypes = {
  size: PropTypes.number,
};
export default LandscapeIcon;
