/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const LeafLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21 3v2c0 9.627-5.373 14-12 14H5.243A17.056 17.056 0 0 0 5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0zm-8 2a8 8 0 0 0-8 8c0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.641 12.5 6.747 14.354 5.776 17H9c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C13.627 5.027 13.401 5 13 5z" />
    </svg>
  );
};

LeafLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LeafLineIcon = withWrapper(LeafLineIconComponent);
export default LeafLineIcon;
