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

const HaloIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M17.364 14a12.05 12.05 0 0 0-3.453 3.5m-1.714 8.68a12.072 12.072 0 0 1 0-4.36M17.364 34a12.05 12.05 0 0 1-3.453-3.5m12.449 5.268a12.062 12.062 0 0 1-4.72 0M30.636 34a12.05 12.05 0 0 0 3.453-3.5m1.714-4.32a12.072 12.072 0 0 0 0-4.36M30.636 14a12.05 12.05 0 0 1 3.453 3.5M21.64 12.232a12.054 12.054 0 0 1 4.72 0M44 24a20.211 20.211 0 0 0-.4-4M4 24a20.239 20.239 0 0 1 .4-4m34.246 17.62a20.125 20.125 0 0 1-2.796 2.493M9.354 37.62a20.122 20.122 0 0 0 2.796 2.493m3.562-34.32a19.945 19.945 0 0 0-3.562 2.094m20.138-2.094a19.945 19.945 0 0 1 3.562 2.094m-9.604-3.762a20.215 20.215 0 0 0-4.492 0m4.492 39.75a19.926 19.926 0 0 0 4.254-.955m-8.747.955a19.926 19.926 0 0 1-4.253-.955M8.155 11.794a20.061 20.061 0 0 0-1.908 2.986m33.598-2.986a20.098 20.098 0 0 1 1.908 2.986M6.247 33.22a19.892 19.892 0 0 1-1.378-3.372m36.884 3.372a19.892 19.892 0 0 0 1.378-3.372"
        />
      </svg>
    </span>
  );
};

HaloIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HaloIcon;
