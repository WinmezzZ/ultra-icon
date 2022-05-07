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

const HotelIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 4h40" />
        <rect
          width={32}
          height={40}
          x={8}
          y={4}
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 32h8v12h-8V32Z" />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M15 12h2m-2 6h2m6-6h2m-2 6h2m6-6h2m-2 6h2" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40" />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M28 32h2c.552 0 1.01-.452.904-.994C30.352 28.166 27.471 26 24 26c-3.47 0-6.352 2.165-6.904 5.006-.106.542.352.994.904.994h2"
        />
      </svg>
    </span>
  );
};

HotelIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HotelIcon;
