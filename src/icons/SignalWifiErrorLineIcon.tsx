/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SignalWifiErrorLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996l-1.257 1.556A15.936 15.936 0 0 0 12 5a15.92 15.92 0 0 0-8.419 2.392L12 17.817l6-7.429v3.183L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z" />
    </svg>
  );
};

SignalWifiErrorLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SignalWifiErrorLineIcon = withWrapper(SignalWifiErrorLineIconComponent);
export default SignalWifiErrorLineIcon;
