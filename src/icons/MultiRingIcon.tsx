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

const MultiRingIcon = (p: SVGComponentProps) => {
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
          strokeLinejoin="round"
          strokeWidth={4}
          d="M30 10a6 6 0 0 0-12 0v14a6 6 0 0 0 12 0V10Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38.142 18.343a6 6 0 0 0-8.485-8.485l-9.9 9.9a6 6 0 1 0 8.486 8.485l9.9-9.9Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38 30a6 6 0 0 0 0-12H24a6 6 0 0 0 0 12h14Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M29.657 38.142a6 6 0 1 0 8.485-8.485l-9.9-9.9a6 6 0 1 0-8.485 8.486l9.9 9.9Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18 38a6 6 0 0 0 12 0V24a6 6 0 0 0-12 0v14Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9.858 29.657a6 6 0 1 0 8.485 8.485l9.9-9.9a6 6 0 1 0-8.486-8.485l-9.9 9.9Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 18a6 6 0 0 0 0 12h14a6 6 0 0 0 0-12H10Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18.343 9.858a6 6 0 0 0-8.485 8.485l9.9 9.9a6 6 0 1 0 8.485-8.486l-9.9-9.9Z"
        />
      </svg>
    </span>
  );
};

MultiRingIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MultiRingIcon;
