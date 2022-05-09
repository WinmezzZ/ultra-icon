/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SignalWifi1LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 12a6.01 6.01 0 0 0-2 .34l2 2.477 2-2.477a6.074 6.074 0 0 0-2-.34zm0-10c-3.028 0-5.923.842-8.42 2.392l5.108 6.324A7.965 7.965 0 0 1 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39A15.928 15.928 0 0 0 12 5z" />
    </svg>
  );
};

SignalWifi1LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SignalWifi1LineIcon = withWrapper(SignalWifi1LineIconComponent);
export default SignalWifi1LineIcon;
