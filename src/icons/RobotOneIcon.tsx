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

const RobotOneIcon = (p: SVGComponentProps) => {
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
        <rect width={30} height={24} x={9} y={18} fill="null" stroke="#000" strokeWidth={4} rx={2} />
        <circle cx={17} cy={26} r={2} fill="#fff" />
        <circle cx={31} cy={26} r={2} fill="#fff" />
        <path fill="#fff" d="M20 32a2 2 0 1 0 0 4v-4Zm8 4a2 2 0 1 0 0-4v4Zm-8 0h8v-4h-8v4Z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 10v8M4 26v8m40-8v8" />
        <circle cx={24} cy={8} r={2} stroke="#000" strokeWidth={4} />
      </svg>
    </span>
  );
};

RobotOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RobotOneIcon;
