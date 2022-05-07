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

const BenzIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6.68 34 24 24m0-20v20V4Zm17.32 30L24 24l17.32 10Z"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M18 4.916A19.992 19.992 0 0 1 24 4c2.09 0 4.106.32 6 .916M4.63 29a19.876 19.876 0 0 0 2.045 5 20.077 20.077 0 0 0 3.042 4m33.653-9a19.88 19.88 0 0 1-2.046 5 20.08 20.08 0 0 1-3.041 4"
        />
      </svg>
    </span>
  );
};

BenzIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BenzIcon;
