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

const WeixinScanIcon = (p: SVGComponentProps) => {
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
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M37 30H12l2 5h12l2.088 6.265A4 4 0 0 0 31.883 44H38a4 4 0 0 0 4-4V30l1-7-3.646.73a2 2 0 0 0-1.58 1.632L37 30ZM11 18h25l-2-5H22l-2.088-6.265A4 4 0 0 0 16.117 4H10a4 4 0 0 0-4 4v10l-1 7 3.646-.73a2 2 0 0 0 1.58-1.632L11 18Z"
        />
      </svg>
    </span>
  );
};

WeixinScanIcon.propTypes = {
  size: PropTypes.number,
};
export default WeixinScanIcon;