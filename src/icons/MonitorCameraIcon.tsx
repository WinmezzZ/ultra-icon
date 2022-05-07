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

const MonitorCameraIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 34c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
        />
        <path
          fill="#43CCF8"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19.369 34 16 44h16l-3.396-10h-9.235Z"
          clipRule="evenodd"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 44h24" />
      </svg>
    </span>
  );
};

MonitorCameraIcon.propTypes = {
  size: PropTypes.number,
};
export default MonitorCameraIcon;