/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FlightTakeoffLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M10.478 11.632 5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z" />
    </svg>
  );
};

FlightTakeoffLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FlightTakeoffLineIcon = withWrapper(FlightTakeoffLineIconComponent);
export default FlightTakeoffLineIcon;
