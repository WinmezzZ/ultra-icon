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
const BatteryChargeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 14H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7m18 0h7a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-7m-8.998 0L17 24.001h10.004L22 34"
      />
      <path fill="#000" d="M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v-8Z" />
    </svg>
  );
};

BatteryChargeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BatteryChargeIcon = withWrapper(BatteryChargeIconComponent);
export default BatteryChargeIcon;
