/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const BodyScanLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M4 16v4h4v2H2v-6h2zm18 0v6h-6v-2h4v-4h2zM7.5 7a4.502 4.502 0 0 0 3.5 4.389V17h2l.001-5.612A4.502 4.502 0 0 0 16.5 7h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7h2zM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 2v2l-4-.001V8H2V2h6zm14 0v6h-2V4h-4V2h6z" />
    </svg>
  );
};

BodyScanLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BodyScanLineIcon = withWrapper(BodyScanLineIconComponent);
export default BodyScanLineIcon;
