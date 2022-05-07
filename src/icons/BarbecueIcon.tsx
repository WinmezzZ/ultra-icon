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

const BarbecueIcon = (p: SVGComponentProps) => {
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
        <rect
          width={8}
          height={8}
          x={12}
          y={4}
          fill="#2F88FF"
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
          fill="#2F88FF"
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
          fill="#2F88FF"
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
          fill="#2F88FF"
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
  size: PropTypes.number,
};
export default BarbecueIcon;