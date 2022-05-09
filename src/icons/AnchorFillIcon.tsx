/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AnchorFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M13 9.874v10.054c3.619-.453 6.487-3.336 6.938-6.972H17L20.704 7A10.041 10.041 0 0 1 22 11.95C22 17.5 17.523 22 12 22S2 17.5 2 11.95c0-1.8.471-3.489 1.296-4.95L7 12.956H4.062c.451 3.636 3.32 6.519 6.938 6.972V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874zM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
};

AnchorFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AnchorFillIcon = withWrapper(AnchorFillIconComponent);
export default AnchorFillIcon;
