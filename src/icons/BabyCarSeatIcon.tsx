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

const BabyCarSeatIcon = (p: SVGComponentProps) => {
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
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m36 33 6-29s-10.5 2-10.5 6c0 2.5 4 4 2.5 5.5s-7 3-7 7c0 2.5 1.64 4.36 0 6-1.5 1.5-3 .714-5.5 0-2.8-.8-8.5-1.5-10.5-1S7 29 7 32c0 1.65 1 3.5 3.5 4s5.5-2 9.5-2 9 3 12 3 4-4 4-4Z"
        />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="m11 36-3 8h33l-6-8" />
      </svg>
    </span>
  );
};

BabyCarSeatIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BabyCarSeatIcon;
