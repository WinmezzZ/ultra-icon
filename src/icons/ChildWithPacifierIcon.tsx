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

const ChildWithPacifierIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 42c9.389 0 17-7.611 17-17S33.389 8 24 8 7 15.611 7 25s7.611 17 17 17Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m33 21-2 1-2-1m-10 0-2 1-2-1m9 17v6m0-36c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4m5.975 36c0-6 0-9-7.975-9-8 0-7.975 3-7.975 9M5 23v4m38-4v4"
        />
      </svg>
    </span>
  );
};

ChildWithPacifierIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ChildWithPacifierIcon;
