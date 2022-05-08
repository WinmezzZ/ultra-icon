/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const ClockTowerIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 44h40M27 32h12v12H27zm11-22v6m-10-6v6m0-6 5-6 5 6H28Z"
      />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M25 20H11a2 2 0 0 0-2 2v22" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M15 29h4m-4 7h4" />
      <rect
        width={16}
        height={16}
        x={25}
        y={16}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={1}
      />
      <circle cx={33} cy={24} r={3} fill="#fff" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M33 32v10" />
    </svg>
  );
};

ClockTowerIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClockTowerIcon = withWrapper(ClockTowerIconComponent);
export default ClockTowerIcon;
