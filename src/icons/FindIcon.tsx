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

const FindIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 7h40M4 23h11M4 39h11" />
        <path fill="#2F88FF" stroke="#000" strokeWidth={4} d="M31.5 34a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m37 32 7 7.05" />
      </svg>
    </span>
  );
};

FindIcon.propTypes = {
  size: PropTypes.number,
};
export default FindIcon;
