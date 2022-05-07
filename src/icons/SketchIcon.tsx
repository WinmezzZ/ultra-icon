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

const SketchIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <rect
          width={36}
          height={36}
          x={6}
          y={6}
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={3}
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18.6 16h10.8l3.6 4.706L24 32l-9-11.294L18.6 16Z"
        />
      </svg>
    </span>
  );
};

SketchIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SketchIcon;
