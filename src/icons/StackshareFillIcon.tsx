/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const StackshareFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-4.208 2.621a2.223 2.223 0 0 0-2.133 1.6h-1.998l-2.46 4.185H8.763a2.22 2.22 0 1 0 0 1.242h1.471l2.417 4.133h2.018a2.221 2.221 0 1 0 0-1.243h-1.317l-2.056-3.536 2.053-3.538h1.31a2.223 2.223 0 1 0 2.133-2.843zm.011 9.427a1.169 1.169 0 1 1-1.144 1.395s-.031-.227 0-.454c.106-.535.578-.94 1.144-.94zm-10.152-4.21a1.17 1.17 0 0 1 1.168 1.168 1.168 1.168 0 0 1-2.335 0c0-.644.523-1.167 1.167-1.167zm10.15-4.209a1.169 1.169 0 0 1 0 2.335 1.17 1.17 0 0 1-1.144-.941c-.026-.206 0-.446 0-.446a1.168 1.168 0 0 1 1.144-.948z" />
    </svg>
  );
};

StackshareFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const StackshareFillIcon = withWrapper(StackshareFillIconComponent);
export default StackshareFillIcon;
