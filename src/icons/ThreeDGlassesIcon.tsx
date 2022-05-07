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

const ThreeDGlassesIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M19.6 34.5h8.8" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M2.303 27.39 9.958 9.563 14.949 7m30.856 20.633L38.05 9.562 33.06 7"
        />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={4}
          d="M3.4 26.8h15.317a1.294 1.294 0 0 1 1.29 1.396l-.927 11.712a1.294 1.294 0 0 1-1.29 1.192H4.328a1.294 1.294 0 0 1-1.29-1.192l-.927-11.712A1.294 1.294 0 0 1 3.4 26.8Zm25.883 0h15.316a1.294 1.294 0 0 1 1.29 1.396l-.927 11.712a1.294 1.294 0 0 1-1.29 1.192H30.21a1.294 1.294 0 0 1-1.29-1.192l-.927-11.712a1.294 1.294 0 0 1 1.29-1.396Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

ThreeDGlassesIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ThreeDGlassesIcon;
