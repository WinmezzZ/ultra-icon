/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const RoadsterFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5h1.875l2.138-5.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L21.625 11H23.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5zM4 15v2a1 1 0 0 0 1 1h3.245a.5.5 0 0 0 .44-.736C7.88 15.754 6.318 15 4 15zm16 0c-2.317 0-3.879.755-4.686 2.264a.5.5 0 0 0 .441.736H19a1 1 0 0 0 1-1v-2zM6 6l-1.561 4.684A1 1 0 0 0 5.387 12h13.226a1 1 0 0 0 .948-1.316L18 6H6z" />
    </svg>
  );
};

RoadsterFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RoadsterFillIcon = withWrapper(RoadsterFillIconComponent);
export default RoadsterFillIcon;
