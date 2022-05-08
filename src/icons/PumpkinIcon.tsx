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
const PumpkinIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={40} height={26} x={4} y={14} fill="null" stroke="#000" strokeWidth={4} rx={13} />
      <ellipse cx={24} cy={27} stroke="#000" strokeWidth={4} rx={8} ry={13} />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M30 6h-3a3 3 0 0 0-3 3v5" />
    </svg>
  );
};

PumpkinIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PumpkinIcon = withWrapper(PumpkinIconComponent);
export default PumpkinIcon;
