/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const BowIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
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
          d="M6.544 14.262C11.403 15.23 16.603 18.754 20 23c0 10.63-7.356 13.237-12.771 13.834-1.478.163-2.451-1.401-1.853-2.763C6.826 30.773 8 27.3 8 25c0-2.391-1.906-5.418-3.186-8.573-.49-1.206.453-2.418 1.73-2.165Zm34.912 0C36.597 15.23 31.397 18.754 28 23c0 10.63 7.356 13.237 12.771 13.834 1.478.163 2.451-1.401 1.853-2.763C41.174 30.773 40 27.3 40 25c0-2.391 1.906-5.418 3.186-8.573.49-1.206-.453-2.418-1.73-2.165Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20 21h8v8h-8z"
        />
      </svg>
    </span>
  );
};

BowIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BowIcon;
