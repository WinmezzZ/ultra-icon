/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Menu4LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
    </svg>
  );
};

Menu4LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Menu4LineIcon = withWrapper(Menu4LineIconComponent);
export default Menu4LineIcon;
