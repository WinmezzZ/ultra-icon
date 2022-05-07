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

const CalculatorOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <rect
          width={32}
          height={40}
          x={8}
          y={4}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 11h20v9H14z"
        />
        <circle cx={17} cy={26} r={2} fill="#000" />
        <circle cx={17} cy={32} r={2} fill="#000" />
        <circle cx={17} cy={38} r={2} fill="#000" />
        <circle cx={24} cy={26} r={2} fill="#000" />
        <circle cx={24} cy={32} r={2} fill="#000" />
        <circle cx={24} cy={38} r={2} fill="#000" />
        <circle cx={31} cy={26} r={2} fill="#000" />
        <circle cx={31} cy={32} r={2} fill="#000" />
        <circle cx={31} cy={38} r={2} fill="#000" />
      </svg>
    </span>
  );
};

CalculatorOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CalculatorOneIcon;
