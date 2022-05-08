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
const BatteryEmptyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M38 14H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Z"
      />
      <path fill="#000" d="M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v-8Z" />
    </svg>
  );
};

BatteryEmptyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BatteryEmptyIcon = withWrapper(BatteryEmptyIconComponent);
export default BatteryEmptyIcon;
