/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const BaseballCapIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
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
          d="M12 30c0-8.837 7.163-16 16-16v0c8.837 0 16 7.163 16 16v6H12v-6Z"
        />
        <path stroke="#000" strokeWidth={4} d="M22 36c-1-3.5-1-22 6-22s6.5 18 6 22" />
        <rect
          width={30}
          height={6}
          x={4}
          y={36}
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={3}
        />
        <circle cx={28} cy={10} r={4} fill="#2F88FF" stroke="#000" strokeWidth={4} />
      </svg>
    </span>
  );
};

BaseballCapIcon.propTypes = {
  size: PropTypes.number,
};
export default BaseballCapIcon;