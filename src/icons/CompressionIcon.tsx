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

const CompressionIcon = (p: SVGComponentProps) => {
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
          d="M8.92 8.714C8.495 7.39 9.476 6 10.867 6h26.266c1.391 0 2.372 1.39 1.947 2.714C37.9 12.4 36 19.09 36 24s1.9 11.6 3.08 15.286c.425 1.325-.556 2.714-1.947 2.714H10.867c-1.391 0-2.372-1.39-1.947-2.714C10.1 35.6 12 28.91 12 24S10.1 12.4 8.92 8.714Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 15c1.5 2 2 6 2 9s-.5 7-2 9"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M18 15.5h12M18 24h12m-12 8h4" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 15c-1.5 2-2 6-2 9s.5 6 2 9"
        />
      </svg>
    </span>
  );
};

CompressionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CompressionIcon;
