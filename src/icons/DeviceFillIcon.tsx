/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DeviceFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M19 6h-8a1 1 0 0 0-1 1v13H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3zm-6 2h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </svg>
  );
};

DeviceFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DeviceFillIcon = withWrapper(DeviceFillIconComponent);
export default DeviceFillIcon;
