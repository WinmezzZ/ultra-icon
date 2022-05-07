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

const ReceiveIcon = (p: SVGComponentProps) => {
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
          d="M4.592 19.467A2 2 0 0 1 6.537 17h34.926a2 2 0 0 1 1.945 2.467l-5.04 21A2 2 0 0 1 36.423 42H11.577a2 2 0 0 1-1.945-1.533l-5.04-21Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11 7h8v10h-8zm8 10 6.5-9L38 17"
        />
        <path stroke="#fff" strokeLinecap="round" strokeWidth={4} d="M15 25h8" />
      </svg>
    </span>
  );
};

ReceiveIcon.propTypes = {
  size: PropTypes.number,
};
export default ReceiveIcon;
