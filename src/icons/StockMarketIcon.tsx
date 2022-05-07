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

const StockMarketIcon = (p: SVGComponentProps) => {
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
        <path fill="#2F88FF" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M6 20h8v14H6zm14-6h8v26h-8z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 44v-4" />
        <path fill="#2F88FF" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M34 12h8v9h-8z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 20V10m28 24V21m0-9V4" />
      </svg>
    </span>
  );
};

StockMarketIcon.propTypes = {
  size: PropTypes.number,
};
export default StockMarketIcon;
