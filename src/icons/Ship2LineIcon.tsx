/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Ship2LineIconComponent = (p: SVGComponentProps) => {
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
      <path d="M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74L19.637 18H19a6.01 6.01 0 0 1-1.535-.198L20.63 12H3.4l1.048 5.824A6.013 6.013 0 0 1 3 18h-.545l-1.24-6.821A1 1 0 0 1 2.197 10H3V5a1 1 0 0 1 1-1h1V1h4v3zm-4 6h11.392l-2.5-4H5v4zM3 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 11 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 19 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 11 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 3 22H1v-2h2z" />
    </svg>
  );
};

Ship2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Ship2LineIcon = withWrapper(Ship2LineIconComponent);
export default Ship2LineIcon;
