/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const InkBottleLineIconComponent = (p: SVGComponentProps) => {
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
      <path d="m16 9 4.371 1.749a1 1 0 0 1 .629.928V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm-.385 2h-7.23L5 12.354V20h14v-1H8v-5h11v-1.646L15.615 11zM16 3a1 1 0 0 1 1 1v4H7V4a1 1 0 0 1 1-1h8zm-1 2H9v1h6V5z" />
    </svg>
  );
};

InkBottleLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InkBottleLineIcon = withWrapper(InkBottleLineIconComponent);
export default InkBottleLineIcon;
