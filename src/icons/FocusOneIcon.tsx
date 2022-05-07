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

const FocusOneIcon = (p: SVGComponentProps) => {
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
          d="M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8"
        />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M24 17v-4m0 22v-4m11-7h-4m-14 0h-4"
        />
        <path fill="#fff" d="M24 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    </span>
  );
};

FocusOneIcon.propTypes = {
  size: PropTypes.number,
};
export default FocusOneIcon;
