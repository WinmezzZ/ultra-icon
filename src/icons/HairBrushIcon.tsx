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

const HairBrushIcon = (p: SVGComponentProps) => {
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
          d="M18.197 31.425c3.124 3.124 10.722.591 16.97-5.657 6.248-6.249 8.781-13.847 5.657-16.97M27.39 6.676l1.413 1.414m-6.363 3.536 1.413 1.414m-5.656 4.242 1.414 1.415m-2.829 5.657 1.415 1.414m16.97-21.213 1.414 1.414m-2.828 7.071 2.828 2.828m-7.778 2.122 2.829 2.828m-8.486 1.414 2.829 2.829"
        />
        <rect
          width={6}
          height={14}
          x={16.075}
          y={29.303}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={3}
          transform="rotate(45 16.075 29.303)"
        />
      </svg>
    </span>
  );
};

HairBrushIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HairBrushIcon;
