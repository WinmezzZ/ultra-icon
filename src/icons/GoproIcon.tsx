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

const GoproIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 7h13v34H5z" />
        <rect width={19} height={22} x={24} y={13} fill="#2F88FF" stroke="#000" strokeWidth={4} rx={3} />
        <circle cx={33.5} cy={24.5} r={3.5} fill="#43CCF8" stroke="#fff" strokeWidth={4} />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 24h6" />
        <rect width={5} height={5} x={9} y={15} fill="#000" rx={2.5} />
      </svg>
    </span>
  );
};

GoproIcon.propTypes = {
  size: PropTypes.number,
};
export default GoproIcon;