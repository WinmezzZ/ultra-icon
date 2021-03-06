/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SignalWifiOffLineIconComponent = (p: SVGComponentProps) => {
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
      <path d="m2.808 1.393 17.677 17.678-1.414 1.414-3.683-3.682L12 21 .69 6.997a18 18 0 0 1 2.95-1.942L1.394 2.808l1.415-1.415zm.771 5.999L12 17.817l1.967-2.437-8.835-8.836c-.532.254-1.05.536-1.552.848zM12 3c4.284 0 8.22 1.497 11.31 3.996l-5.407 6.693-1.422-1.422 3.939-4.876A15.92 15.92 0 0 0 12 5c-.873 0-1.735.07-2.58.207L7.725 3.51A18.077 18.077 0 0 1 12 3z" />
    </svg>
  );
};

SignalWifiOffLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SignalWifiOffLineIcon = withWrapper(SignalWifiOffLineIconComponent);
export default SignalWifiOffLineIcon;
