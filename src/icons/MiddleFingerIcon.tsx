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

const MiddleFingerIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M14.972 26.975c-3.32.591-4.981 2.6-4.981 6.025 0 5.138 5.153 11 9.8 11h11.89c4.547 0 7.31-3.85 7.31-6.94V24.01a3 3 0 0 0-3-3h-.01a2.99 2.99 0 0 0-2.99 2.99"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M14.972 30.04v-9.027a3.003 3.003 0 0 1 3.003-3.003h.003a3.009 3.009 0 0 1 3.006 3.01v4.003"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20.984 24.009V7.016a3.016 3.016 0 0 1 6.03 0v16.992"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M26.99 23.716v-2.712a3 3 0 0 1 6 0v3"
        />
      </svg>
    </span>
  );
};

MiddleFingerIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MiddleFingerIcon;
