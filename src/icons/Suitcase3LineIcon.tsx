/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Suitcase3LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1h6zm4 8H5v10h14V9zM9 10v8H7v-8h2zm4 0v8h-2v-8h2zm4 0v8h-2v-8h2zm-3-7h-4v4h4V3z" />
    </svg>
  );
};

Suitcase3LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Suitcase3LineIcon = withWrapper(Suitcase3LineIconComponent);
export default Suitcase3LineIcon;
