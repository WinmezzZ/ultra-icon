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

const GoogleAdsIcon = (p: SVGComponentProps) => {
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
        <g stroke="#000" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            fill="#2F88FF"
            d="M41.354 34.153 29.521 8.776a6 6 0 0 0-10.876 5.072l11.833 25.376a6 6 0 1 0 10.876-5.071Z"
          />
          <path
            strokeLinecap="round"
            d="M23.436 26.536 17.52 39.224a6 6 0 0 1-7.974 2.902v0a6 6 0 0 1-2.902-7.973L18.373 9"
          />
          <circle cx={12.082} cy={36.688} r={6} fill="#2F88FF" transform="rotate(25 12.082 36.688)" />
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

GoogleAdsIcon.propTypes = {
  size: PropTypes.number,
};
export default GoogleAdsIcon;
