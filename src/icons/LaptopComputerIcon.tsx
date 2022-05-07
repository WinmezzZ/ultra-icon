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

const LaptopComputerIcon = (p: SVGComponentProps) => {
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
        <rect width={38} height={24} x={5} y={8} fill="null" stroke="#000" strokeWidth={4} rx={2} />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 40h40" />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M22 14h4" />
      </svg>
    </span>
  );
};

LaptopComputerIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default LaptopComputerIcon;
