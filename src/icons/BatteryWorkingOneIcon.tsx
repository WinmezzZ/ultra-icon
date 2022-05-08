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
const BatteryWorkingOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={36}
        height={20}
        x={4}
        y={14}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <path fill="#000" d="M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v-8Z" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 21v6m6-6v6m6-6v6m6-3v3" />
    </svg>
  );
};

BatteryWorkingOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BatteryWorkingOneIcon = withWrapper(BatteryWorkingOneIconComponent);
export default BatteryWorkingOneIcon;
