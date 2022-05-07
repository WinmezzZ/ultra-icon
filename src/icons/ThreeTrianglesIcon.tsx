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

const ThreeTrianglesIcon = (p: SVGComponentProps) => {
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
        <path fill="null" d="m17 7 7 12.124L29.99 29.5H4.01L17 7Z" />
        <path fill="null" d="m31 7 12.99 22.5H18.01L24 19.124 31 7ZM11.01 41.5h25.98l-7-12H18.01l-7 12Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m18.01 29.5-7 12h25.98l-7-12m-11.98 0h25.98L31 7l-7 12.124M18.01 29.5 24 19.124M18.01 29.5h11.98m0 0H4.01L17 7l7 12.124M29.99 29.5 24 19.124"
        />
      </svg>
    </span>
  );
};

ThreeTrianglesIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ThreeTrianglesIcon;
