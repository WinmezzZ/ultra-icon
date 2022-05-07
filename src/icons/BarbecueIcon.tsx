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

const BarbecueIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <rect
          width={8}
          height={8}
          x={12}
          y={4}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={4}
        />
        <rect
          width={8}
          height={8}
          x={12}
          y={22}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={4}
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M16 31v13" />
        <rect
          width={8}
          height={8}
          x={28}
          y={4}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={4}
        />
        <rect
          width={8}
          height={8}
          x={28}
          y={22}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={4}
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M32 31v13" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M13 17h6m10 0h6M13 36h6m10 0h6"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M16 14v6m16-6v6" />
      </svg>
    </span>
  );
};

BarbecueIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BarbecueIcon;
