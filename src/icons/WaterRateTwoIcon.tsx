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

const WaterRateTwoIcon = (p: SVGComponentProps) => {
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
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 44c8.837 0 16-7.164 16-16C40 15 24 4 24 4S8 15 8 28c0 8.837 7.163 16 16 16Z"
          clipRule="evenodd"
        />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m24 20-4 8h8l-4 8" />
      </svg>
    </span>
  );
};

WaterRateTwoIcon.propTypes = {
  size: PropTypes.number,
};
export default WaterRateTwoIcon;