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

const SpeedOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M30.297 18.779s-3.23 9.102-4.764 10.69a4 4 0 1 1-5.754-5.556c1.534-1.59 10.518-5.134 10.518-5.134Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38.85 38.85A20.941 20.941 0 0 0 45 24c0-11.598-9.402-21-21-21S3 12.402 3 24c0 5.799 2.35 11.049 6.15 14.85M24 4v4m14.845 3.142-3.108 2.517m6.786 13.574-3.898-.9m-33.148.9 3.898-.9m-.22-15.191 3.108 2.517"
        />
      </svg>
    </span>
  );
};

SpeedOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SpeedOneIcon;
