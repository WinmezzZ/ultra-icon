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

const CoronavirusIcon = (p: SVGComponentProps) => {
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
          d="M7.635 35.5A20.11 20.11 0 0 0 13 40.706m14.868 2.92A20.107 20.107 0 0 1 24 44c-1.324 0-2.617-.129-3.869-.374M43.55 28.243a20.173 20.173 0 0 0 .017-8.4M40.365 12.5A20.104 20.104 0 0 0 35 7.294M20.155 4.37A20.1 20.1 0 0 1 24 4c1.315 0 2.6.127 3.845.37M7.635 12.5A20.106 20.106 0 0 1 13 7.294m27.5 28a20.096 20.096 0 0 1-5.365 5.206M16 24H4m6 14 8.343-8.343M24 32v12m14-6-8.343-8.343M32 24h12m-6-14-8.343 8.343M24 16V4m-14 6 8.343 8.343m-13.91 1.5A20.083 20.083 0 0 0 4 24c0 1.425.15 2.816.433 4.157"
        />
        <circle
          cx={24}
          cy={24}
          r={8}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
      </svg>
    </span>
  );
};

CoronavirusIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CoronavirusIcon;
