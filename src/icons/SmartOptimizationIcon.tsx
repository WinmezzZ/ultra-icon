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

const SmartOptimizationIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 45c3.22 0 8.727-4.2 8.727-21S27.221 3 24 3c-3.22 0-8.727 4.483-8.727 21S20.78 45 24 45Z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5.105 35c1.61 2.812 8.143 5.421 23.259-3.379S44.505 15.812 42.895 13c-1.61-2.812-8.397-5.273-23.259 3.379C4.777 25.031 3.496 32.188 5.106 35Z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5.105 13c-1.61 2.812-.585 9.821 14.531 18.621 15.116 8.8 21.649 6.191 23.26 3.379 1.61-2.812.33-9.97-14.532-18.621C13.502 7.727 6.715 10.188 5.104 13Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

SmartOptimizationIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SmartOptimizationIcon;
