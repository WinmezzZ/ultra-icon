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

const SunnyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M30.783 24.565a6.783 6.783 0 1 0-6.683-7.947"
        />
        <path
          fill="#000"
          d="M33 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9.455 39.994A13.95 13.95 0 0 1 4 28.885C4 21.217 10.105 15 17.636 15c6.297 0 11.598 4.346 13.166 10.253a8.921 8.921 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.256 0 3.796-2.244 7.059-5.455 8.487"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22.243 24.757a6 6 0 0 0-8.485 8.485"
        />
      </svg>
    </span>
  );
};

SunnyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SunnyIcon;
