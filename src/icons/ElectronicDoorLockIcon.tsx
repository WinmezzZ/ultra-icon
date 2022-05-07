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

const ElectronicDoorLockIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <rect
          width={26}
          height={40}
          x={6}
          y={4}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <rect
          width={24}
          height={8}
          x={20}
          y={30}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={4}
        />
        <circle cx={12} cy={12} r={2} fill="#000" />
        <circle cx={12} cy={18} r={2} fill="#000" />
        <circle cx={12} cy={24} r={2} fill="#000" />
        <circle cx={19} cy={12} r={2} fill="#000" />
        <circle cx={19} cy={18} r={2} fill="#000" />
        <circle cx={19} cy={24} r={2} fill="#000" />
        <circle cx={26} cy={12} r={2} fill="#000" />
        <circle cx={26} cy={18} r={2} fill="#000" />
        <circle cx={26} cy={24} r={2} fill="#000" />
      </svg>
    </span>
  );
};

ElectronicDoorLockIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ElectronicDoorLockIcon;
