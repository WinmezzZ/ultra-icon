/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FoggyFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z" />
    </svg>
  );
};

FoggyFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FoggyFillIcon = withWrapper(FoggyFillIconComponent);
export default FoggyFillIcon;
