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

const FutureBuildOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 24c1.217-8.296 10-19 10-19s8.782 10.704 10 19c1.09 7.432-3 20-3 20H17s-4.09-12.568-3-20Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M18 14h12m-15 6h18m-19 6h20m-19 6h18m-17 6h16" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 4v2" />
      </svg>
    </span>
  );
};

FutureBuildOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FutureBuildOneIcon;
