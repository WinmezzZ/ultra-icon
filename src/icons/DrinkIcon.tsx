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

const DrinkIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M10 16h28" />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M14.153 18.142A2 2 0 0 1 16.148 16h15.704a2 2 0 0 1 1.995 2.142l-1.714 24A2 2 0 0 1 30.138 44H17.862a2 2 0 0 1-1.995-1.858l-1.714-24Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 10V6a2 2 0 0 1 2-2h3" />
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M14.722 11.671A2 2 0 0 1 16.694 10h14.612a2 2 0 0 1 1.973 1.671L34 16H14l.722-4.329Z"
        />
      </svg>
    </span>
  );
};

DrinkIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DrinkIcon;
