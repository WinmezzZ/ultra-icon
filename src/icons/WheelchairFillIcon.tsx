/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const WheelchairFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 10.341v2.194A3.999 3.999 0 1 0 13.465 18h2.193A6.002 6.002 0 0 1 4 16a6.003 6.003 0 0 1 4-5.659zM12 17a3 3 0 0 1-3-3v-4a3 3 0 1 1 6 0v5h1.434a2 2 0 0 1 1.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17H12zm0-15a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
    </svg>
  );
};

WheelchairFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WheelchairFillIcon = withWrapper(WheelchairFillIconComponent);
export default WheelchairFillIcon;
