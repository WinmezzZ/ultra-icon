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
const SteeringFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21.8 14.001a10.009 10.009 0 0 1-8.4 7.902v-2.025A8.01 8.01 0 0 0 19.748 14l2.052.001zm-17.548 0a8.01 8.01 0 0 0 6.247 5.858v2.03A10.01 10.01 0 0 1 2.2 14h2.052zM18 11v2h-1a4 4 0 0 0-3.995 3.8L13 17v1h-2v-1a4 4 0 0 0-3.8-3.995L7 13H6v-2h12zm-6-9c5.185 0 9.449 3.947 9.95 9h-2.012a8.001 8.001 0 0 0-15.876 0H2.049C2.551 5.947 6.815 2 12 2z" />
    </svg>
  );
};

SteeringFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SteeringFillIcon = withWrapper(SteeringFillIconComponent);
export default SteeringFillIcon;