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

const HiIcon = (p: SVGComponentProps) => {
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
          d="M37 43H17.476a.257.257 0 0 1-.218-.121L7.86 27.727a4.095 4.095 0 1 1 7.011-4.23l2.462 4.194V8.576a3 3 0 0 1 3.522-2.955L37.52 8.563A3 3 0 0 1 40 11.517V40a3 3 0 0 1-3 3Z"
        />
      </svg>
    </span>
  );
};

HiIcon.propTypes = {
  size: PropTypes.number,
};
export default HiIcon;