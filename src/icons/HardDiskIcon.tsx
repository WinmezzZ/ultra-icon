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

const HardDiskIcon = (p: SVGComponentProps) => {
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
        <path fill="#2F88FF" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M44 29H4v13h40V29Z" />
        <path fill="#fff" d="M35.5 38a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M4 29 9.038 4.999H39.02l4.98 24" />
      </svg>
    </span>
  );
};

HardDiskIcon.propTypes = {
  size: PropTypes.number,
};
export default HardDiskIcon;
