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

const FThreeKeyIcon = (p: SVGComponentProps) => {
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
        <rect
          width={36}
          height={36}
          x={6}
          y={6}
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={3}
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M27 16h7l-4.9 7.2c2.8 0 4.9 1.8 4.9 4.8s-2 4-3.5 4c-1.667 0-3-1-3.5-2m-6-14h-7v16m0-8h7"
        />
      </svg>
    </span>
  );
};

FThreeKeyIcon.propTypes = {
  size: PropTypes.number,
};
export default FThreeKeyIcon;