/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Spam2FillIconComponent = (p: SVGComponentProps) => {
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
      <path d="m16.218 2.5 5.683 5.682v8.036l-5.683 5.683H8.182l-5.683-5.683V8.182l5.683-5.683h8.036zM11 15v2h2v-2h-2zm0-8v6h2V7h-2z" />
    </svg>
  );
};

Spam2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Spam2FillIcon = withWrapper(Spam2FillIconComponent);
export default Spam2FillIcon;
