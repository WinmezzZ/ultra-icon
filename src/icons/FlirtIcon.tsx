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

const FlirtIcon = (p: SVGComponentProps) => {
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M26 21c-2-.5-4.753-1.638-8.83 1.092-3.03 2.03-4.305 5.148-4.735 7.438-.205 1.089.72 1.967 1.82 1.836.796-.094 1.68-.241 2.347-.467 1.97-.667 1.712-1.93 2.717-3.453 1.006-1.522 3.533-2.04 5.613-.885 2.08 1.154 2.746 3.125 2.298 4.797-.448 1.671-1.453 3.194-3.98 3.71-2.528.518-3.344-.895-5.981-2.199-1.374-.68-3.166.202-4.249.899a1.514 1.514 0 0 0-.61 1.822c.175.463.415 1.005.729 1.548.816 1.413 4.378 5.95 8.985 6.588 4.607.637 9.404-1.66 12.12-5.114 2.718-3.452 2.798-8.209.907-12.299"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35.045 26.42 32 14l-9.293-9.293c-.39-.39-1.02-.384-1.334.07C20.62 5.862 19.62 7.931 21 10c.488.731 4.001 5 4.001 5s2.096 12.574 2.472 14.567"
        />
      </svg>
    </span>
  );
};

FlirtIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FlirtIcon;
