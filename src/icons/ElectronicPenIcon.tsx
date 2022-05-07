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

const ElectronicPenIcon = (p: SVGComponentProps) => {
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
        <g clipPath="url(#prefix__a)">
          <rect
            width={12}
            height={38}
            x={35.192}
            y={5.322}
            fill="null"
            stroke="#000"
            strokeWidth={4}
            rx={6}
            transform="rotate(45 35.192 5.322)"
          />
          <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m18 23 8 8M6 43l6-6" />
          <rect width={4} height={4} x={33.268} y={12.34} fill="#fff" rx={2} transform="rotate(30 33.268 12.34)" />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

ElectronicPenIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ElectronicPenIcon;
