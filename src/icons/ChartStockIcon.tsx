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

const ChartStockIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="#2F88FF" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M6 16h8v16H6z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 6v10m0 16v10" />
        <path fill="#2F88FF" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M34 16h8v16h-8z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M38 6v10m0 16v10" />
        <path fill="#2F88FF" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M20 14h8v16h-8z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 4v10m0 16v10" />
      </svg>
    </span>
  );
};

ChartStockIcon.propTypes = {
  size: PropTypes.number,
};
export default ChartStockIcon;
