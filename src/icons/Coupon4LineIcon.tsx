/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Coupon4LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M10 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0zm-1.465-2A3.998 3.998 0 0 1 12 17c1.48 0 2.773.804 3.465 2H20V5h-4.535A3.998 3.998 0 0 1 12 7a3.998 3.998 0 0 1-3.465-2H4v14h4.535zM6 8h2v8H6V8zm10 0h2v8h-2V8z" />
    </svg>
  );
};

Coupon4LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Coupon4LineIcon = withWrapper(Coupon4LineIconComponent);
export default Coupon4LineIcon;
