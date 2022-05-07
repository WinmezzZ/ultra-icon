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

const CityGateIcon = (p: SVGComponentProps) => {
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
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15 11h17s5.048 2.966 7 4c1.091.578 5 1 5 1s-1.816.649-3 1c-1.544.458-4 1-4 1H11s-2.456-.542-4-1c-1.184-.351-3-1-3-1s3.909-.422 5-1c1.952-1.034 6-4 6-4Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m17 11 7-7 6 7H17Z" />
        <path stroke="#000" strokeWidth={4} d="M35 18v6m-23-6v6" />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="m4 44 2-20h36l2 20H4Z" />
        <path stroke="#000" strokeWidth={4} d="M20 38a4 4 0 0 1 8 0v6h-8v-6Z" />
      </svg>
    </span>
  );
};

CityGateIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CityGateIcon;
