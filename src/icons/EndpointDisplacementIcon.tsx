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

const EndpointDisplacementIcon = (p: SVGComponentProps) => {
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
        <path fill="null" d="M16 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M16 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm0 0h11m0 0-4-4m4 4-4 4"
        />
        <path fill="null" d="M32 38a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M32 38a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm0 0H21m0 0 4-4m-4 4 4 4"
        />
        <path fill="null" d="M33 11a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0 0v11m0 0 4-4m-4 4-4-4"
        />
        <path fill="null" d="M5 37a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 32a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 0V21m0 0 4 4m-4-4-4 4"
        />
      </svg>
    </span>
  );
};

EndpointDisplacementIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default EndpointDisplacementIcon;
