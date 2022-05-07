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

const MarketAnalysisIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 11a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v9h40v-9Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m4.112 39.03 12.176-12.3 6.58 6.3L30.91 26l4.48 4.368"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 18v19a3 3 0 0 1-3 3H12"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19.112 14h18M11.11 14h2" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 18v9" />
      </svg>
    </span>
  );
};

MarketAnalysisIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MarketAnalysisIcon;
