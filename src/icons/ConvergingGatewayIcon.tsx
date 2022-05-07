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

const ConvergingGatewayIcon = (p: SVGComponentProps) => {
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
          d="M22.799 4.201 4.414 22.586a2 2 0 0 0 0 2.828L22.8 43.8a2 2 0 0 0 2.828 0l18.385-18.385a2 2 0 0 0 0-2.828L25.627 4.2a2 2 0 0 0-2.828 0Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeWidth={4}
          d="M24.043 15.534v16.944m-8.472-8.472h16.944m-2.481-5.991L18.053 29.996m-.001-11.981 11.982 11.981"
        />
      </svg>
    </span>
  );
};

ConvergingGatewayIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ConvergingGatewayIcon;
