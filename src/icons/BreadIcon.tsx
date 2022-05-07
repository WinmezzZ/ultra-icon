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

const BreadIcon = (p: SVGComponentProps) => {
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 32.083c0-1.202.266-2.395.971-3.368C7.045 25.85 12.671 20 24 20c11.33 0 16.955 5.851 19.029 8.715.705.973.971 2.166.971 3.368v0A7.917 7.917 0 0 1 36.083 40H11.917A7.917 7.917 0 0 1 4 32.083v0Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M12 9v4" />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M14 22v4" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M36 9v4" />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M34 22v4" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 7v6" />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M24 20v8" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M40 25.443C36.906 22.78 31.808 20 24 20s-12.906 2.779-16 5.443"
        />
      </svg>
    </span>
  );
};

BreadIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BreadIcon;
