/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const VirusFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m13.717 1.947 3.734 1.434-.717 1.867-.934-.359-.746 1.945a6.042 6.042 0 0 1 1.945 1.846l1.903-.847-.407-.914 1.827-.813 1.627 3.654-1.827.813-.407-.913-1.902.847a6.023 6.023 0 0 1 .07 2.68l1.944.746.358-.933 1.868.717-1.434 3.734-1.867-.717.358-.933-1.944-.747a6.042 6.042 0 0 1-1.846 1.945l.847 1.903.914-.407.813 1.827-3.654 1.627-.813-1.827.913-.407-.847-1.902a6.023 6.023 0 0 1-2.681.069l-.746 1.945.934.358-.717 1.868-3.734-1.434.717-1.867.932.358.748-1.944A6.055 6.055 0 0 1 7 15.32l-1.903.847.407.914-1.827.813L2.05 14.24l1.827-.813.406.914 1.903-.848a6.07 6.07 0 0 1-.069-2.68l-1.945-.746-.357.933-1.868-.717L3.381 6.55l1.867.717-.359.933 1.945.747A6.048 6.048 0 0 1 8.68 7l-.847-1.903-.914.407-.813-1.827L9.76 2.051l.813 1.827-.913.407.847 1.902a6.023 6.023 0 0 1 2.68-.07l.745-1.945L13 3.815l.717-1.868zm-3.583 11.285a1 1 0 1 0 1.733 1 1 1 0 0 0-1.733-1zM14 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3.5-1.598a1 1 0 1 0 1.001 1.732A1 1 0 0 0 10.5 9.402z" />
    </svg>
  );
};

VirusFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VirusFillIcon = withWrapper(VirusFillIconComponent);
export default VirusFillIcon;
