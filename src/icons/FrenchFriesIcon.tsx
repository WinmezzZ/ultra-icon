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

const FrenchFriesIcon = (p: SVGComponentProps) => {
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
          d="M21 22V12a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v9m21 0v-7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8m0 0V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v16"
        />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M7 18s7 5 17 5 17-5 17-5l-4.818 26H11.818L7 18Z"
        />
        <ellipse cx={24} cy={33} fill="#43CCF8" stroke="#fff" strokeWidth={4} rx={6} ry={3} />
      </svg>
    </span>
  );
};

FrenchFriesIcon.propTypes = {
  size: PropTypes.number,
};
export default FrenchFriesIcon;
