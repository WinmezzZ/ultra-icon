/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SpaceShipLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zm6.698-1.123 1.157.066L12 19.527l1.265-2.53 1.157-.066a42.137 42.137 0 0 0 4.227-.454A33.913 33.913 0 0 0 12 4.09a33.913 33.913 0 0 0-6.649 12.387c1.395.222 2.805.374 4.227.454zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
};

SpaceShipLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpaceShipLineIcon = withWrapper(SpaceShipLineIconComponent);
export default SpaceShipLineIcon;
