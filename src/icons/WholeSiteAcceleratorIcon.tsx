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

const WholeSiteAcceleratorIcon = (p: SVGComponentProps) => {
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
        <circle cx={22} cy={40} r={4} fill="#2F88FF" stroke="#000" strokeWidth={4} />
        <circle cx={26} cy={8} r={4} fill="#2F88FF" stroke="#000" strokeWidth={4} />
        <circle cx={36} cy={24} r={4} fill="#2F88FF" stroke="#000" strokeWidth={4} />
        <circle cx={12} cy={24} r={4} fill="#2F88FF" stroke="#000" strokeWidth={4} />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 24H16m7-13-8 10" />
        <path stroke="#000" strokeWidth={4} d="m33 27-8.001 10" />
      </svg>
    </span>
  );
};

WholeSiteAcceleratorIcon.propTypes = {
  size: PropTypes.number,
};
export default WholeSiteAcceleratorIcon;
