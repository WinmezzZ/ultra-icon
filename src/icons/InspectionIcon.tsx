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

const InspectionIcon = (p: SVGComponentProps) => {
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
          d="M43 33V19H5v22a2 2 0 0 0 2 2h17"
        />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5v-9Z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M16 5v8m16-8v8" />
        <circle cx={30} cy={32} r={7} fill="null" stroke="#000" strokeWidth={4} />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m36 37 6 5" />
      </svg>
    </span>
  );
};

InspectionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default InspectionIcon;
