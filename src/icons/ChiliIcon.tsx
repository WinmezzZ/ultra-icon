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

const ChiliIcon = (p: SVGComponentProps) => {
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
        <g stroke="#000" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            fill="null"
            d="M21.168 16.594c1.647-5.607 8.323-7.928 13.093-4.552 4.125 2.918 4.818 8.766 1.488 12.567l-3.13 3.574a48.817 48.817 0 0 1-19.204 13.4l-3.558 1.369a2.338 2.338 0 0 1-2.294-4.014l2.78-2.207a25.8 25.8 0 0 0 8.706-12.928l2.119-7.21Z"
          />
          <path d="M29.842 10.684a4.931 4.931 0 1 1 7.768 5.39" />
          <path strokeLinecap="round" d="m42 4-4 4" />
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

ChiliIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ChiliIcon;
