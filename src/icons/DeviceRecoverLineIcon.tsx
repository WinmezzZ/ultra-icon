/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DeviceRecoverLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14zm-1 2H6v16h12V4zm-6 3a5 5 0 0 1 2.628 9.254L12.5 12H15a3 3 0 1 0-3 3l.955 1.909A5 5 0 1 1 12 7z" />
    </svg>
  );
};

DeviceRecoverLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DeviceRecoverLineIcon = withWrapper(DeviceRecoverLineIconComponent);
export default DeviceRecoverLineIcon;
