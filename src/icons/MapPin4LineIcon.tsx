/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const MapPin4LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2v-3.062zM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-7 6h14v2H5v-2z" />
    </svg>
  );
};

MapPin4LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MapPin4LineIcon = withWrapper(MapPin4LineIconComponent);
export default MapPin4LineIcon;
