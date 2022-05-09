/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SignalWifiErrorFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L22.498 8H18v5.571L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z" />
    </svg>
  );
};

SignalWifiErrorFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SignalWifiErrorFillIcon = withWrapper(SignalWifiErrorFillIconComponent);
export default SignalWifiErrorFillIcon;
