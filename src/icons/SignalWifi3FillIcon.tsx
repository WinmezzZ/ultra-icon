/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SignalWifi3FillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392l1.904 2.357C7.4 8.637 9.625 8 12 8s4.6.637 6.516 1.749L20.42 7.39A15.928 15.928 0 0 0 12 5z" />
    </svg>
  );
};

SignalWifi3FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SignalWifi3FillIcon = withWrapper(SignalWifi3FillIconComponent);
export default SignalWifi3FillIcon;
