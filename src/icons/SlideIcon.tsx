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

const SlideIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeLinejoin="round" strokeWidth={4}>
            <path fill="null" fillRule="nonzero" stroke="#000" d="M7 5.5h34v28H7z" />
            <path stroke="#000" strokeLinecap="round" d="m16 41.5 8-8 8 8" />
            <path stroke="#FFF" strokeLinecap="round" d="m13.924 24.663 5.642-5.508 4.442 4.345 9.959-9.98" />
            <path stroke="#000" strokeLinecap="round" d="M4 5.5h40" />
          </g>
        </g>
      </svg>
    </span>
  );
};

SlideIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SlideIcon;
