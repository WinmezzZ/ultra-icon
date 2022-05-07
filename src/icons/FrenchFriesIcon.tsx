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

const FrenchFriesIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M21 22V12a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v9m21 0v-7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8m0 0V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v16"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M7 18s7 5 17 5 17-5 17-5l-4.818 26H11.818L7 18Z"
        />
        <ellipse cx={24} cy={33} fill="null" stroke="#333" strokeWidth={4} rx={6} ry={3} />
      </svg>
    </span>
  );
};

FrenchFriesIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FrenchFriesIcon;
