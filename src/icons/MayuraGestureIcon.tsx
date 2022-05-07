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

const MayuraGestureIcon = (p: SVGComponentProps) => {
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
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m20.995 36-1.901-4.01 5.11-.417a3.782 3.782 0 0 0 0-7.564h-8.207C12.61 24.009 9 27.584 9 31.042s.787 5.439 1.647 7.297c.859 1.858 3.15 5.661 9.369 5.661h8.939c5.248 0 9.045-4.854 9.032-11-.008-3.83-.006-9.497.007-17a2.99 2.99 0 0 0-2.985-2.996h-.005a2.99 2.99 0 0 0-2.99 2.99V16c.01 5.141.015 8.158.015 9.051 0 2.894-1.34 3.891-4.022 2.992M25.955 24l.04-17a2.993 2.993 0 0 0-2.986-3h-.007a2.988 2.988 0 0 0-2.986 3v16.04"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14.006 24V10a2.996 2.996 0 0 1 2.996-2.995h.004c1.658.002 3 1.346 3 3.004V24m6.001-3.98v-1a3 3 0 0 1 6 0v1"
        />
      </svg>
    </span>
  );
};

MayuraGestureIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MayuraGestureIcon;
