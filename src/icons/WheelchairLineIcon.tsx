/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const WheelchairLineIconComponent = (p: SVGComponentProps) => {
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
      <path d="M8 10.341v2.194A3.999 3.999 0 1 0 13.465 18h2.193A6.002 6.002 0 0 1 4 16a6.003 6.003 0 0 1 4-5.659zM12 17a3 3 0 0 1-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 1 1 3.314.002A2.99 2.99 0 0 1 15 10v4.999l1.434.001a2 2 0 0 1 1.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17 15 16.999 12 17zm0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.999L13 10a1 1 0 0 0-1-1zm0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
};

WheelchairLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WheelchairLineIcon = withWrapper(WheelchairLineIconComponent);
export default WheelchairLineIcon;
