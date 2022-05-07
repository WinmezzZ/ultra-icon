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

const RockGestureIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 25V7.5c0-1.281.5-3.5 3-3.5s3 2.219 3 3.5V30l7-7c1.297-1.297 3.078-1.922 4.5-.5 1.422 1.422 1.594 2.906 0 4.5L35 33.5S29.094 44 26 44H13s-3 0-5-2-2-4.5-2-4.5V12.781C6 12.062 6.5 10 9 10s3 2 3 2.781V25"
        />
        <rect width={6} height={12} x={12} y={19} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={3} />
        <rect width={6} height={12} x={18} y={19} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={3} />
      </svg>
    </span>
  );
};

RockGestureIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RockGestureIcon;
