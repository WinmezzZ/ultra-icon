/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Building4LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zm-2 0V4H5v16h14zM8 11h3v2H8v-2zm0-4h3v2H8V7zm0 8h3v2H8v-2zm5 0h3v2h-3v-2zm0-4h3v2h-3v-2zm0-4h3v2h-3V7z" />
    </svg>
  );
};

Building4LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Building4LineIcon = withWrapper(Building4LineIconComponent);
export default Building4LineIcon;
