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

const FingernailIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="m38 9.472.343 1.056h1.11l-.898.652.343 1.056-.898-.652-.898.652.343-1.056-.898-.652h1.11L38 9.472Z"
        />
        <rect
          width={12}
          height={24}
          x={18}
          y={13}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={6}
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18 25c-2 0-5 2.118-5 6v9.784M30 25c2 0 5 2.118 5 6v9.5"
        />
      </svg>
    </span>
  );
};

FingernailIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FingernailIcon;
