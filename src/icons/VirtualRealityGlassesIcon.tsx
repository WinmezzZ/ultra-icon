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

const VirtualRealityGlassesIcon = (p: SVGComponentProps) => {
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
          d="M5 16h38a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H30l-5.992-5.999L18 40H5a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1Z"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 32a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm20 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path fill="null" fillRule="evenodd" d="M6 10h36H6Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 10h36" />
      </svg>
    </span>
  );
};

VirtualRealityGlassesIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default VirtualRealityGlassesIcon;
