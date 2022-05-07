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

const PesticideIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15 11.368V4h18v7.368l6 6.119V42a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V17.486l6-6.118Z"
          clipRule="evenodd"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 23h8v12H9" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M15 11.5h18" />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M31 23v6m0 5v1" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 38V20" />
      </svg>
    </span>
  );
};

PesticideIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PesticideIcon;
