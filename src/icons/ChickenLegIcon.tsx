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

const ChickenLegIcon = (p: SVGComponentProps) => {
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
        <g clipPath="url(#prefix__a)">
          <path
            fill="#2F88FF"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M33.374 33.874c4.243-4.242 1.415-18.384-4.95-24.748-2.828-2.829-10.96-8.84-19.798 0-8.84 8.838-2.829 16.97 0 19.798 6.364 6.365 20.506 9.193 24.748 4.95Z"
          />
          <path stroke="#000" strokeWidth={4} d="m41 41-7-7" />
          <circle cx={42.193} cy={40.071} r={2.5} fill="#000" transform="rotate(135 42.193 40.071)" />
          <circle cx={40.071} cy={42.193} r={2.5} fill="#000" transform="rotate(135 40.071 42.193)" />
          <circle cx={17} cy={18} r={2} fill="#fff" />
          <circle cx={12} cy={21} r={2} fill="#fff" />
          <circle cx={17} cy={24} r={2} fill="#fff" />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

ChickenLegIcon.propTypes = {
  size: PropTypes.number,
};
export default ChickenLegIcon;
