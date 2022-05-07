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

const SplitTurnDownLeftIcon = (p: SVGComponentProps) => {
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
          d="M37 22H21a8 8 0 0 0-8 8v14"
        />
        <circle
          cx={37}
          cy={8.944}
          r={5}
          fill="#2F88FF"
          stroke="#000"
          strokeWidth={4}
          transform="rotate(-90 37 8.944)"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M37 14v29m5-4-5 5-5-5m-14 0-5 5-5-5"
        />
      </svg>
    </span>
  );
};

SplitTurnDownLeftIcon.propTypes = {
  size: PropTypes.number,
};
export default SplitTurnDownLeftIcon;