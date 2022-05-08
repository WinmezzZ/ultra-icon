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
const ChargingTreasureIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M42.085 35 38.957 8.646A3 3 0 0 0 35.978 6H12.943a3 3 0 0 0-2.968 2.557L6.023 35"
      />
      <rect width={36} height={12} x={6} y={30} fill="null" stroke="#000" strokeWidth={4} rx={6} />
      <rect width={4} height={4} x={19} y={34} fill="#fff" rx={2} />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M29 36h6" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M22 12h4" />
    </svg>
  );
};

ChargingTreasureIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChargingTreasureIcon = withWrapper(ChargingTreasureIconComponent);
export default ChargingTreasureIcon;
