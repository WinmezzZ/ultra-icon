/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const BasketballFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m12.366 13.366 1.775 1.025a9.98 9.98 0 0 0-.311 7.44A9.911 9.911 0 0 1 12 22a9.964 9.964 0 0 1-4.11-.88l4.476-7.754zm3.517 2.032 4.234 2.444a10.033 10.033 0 0 1-4.363 3.43 7.988 7.988 0 0 1 .008-5.57l.121-.304zM8.86 11.342l1.775 1.024-4.476 7.75a10.026 10.026 0 0 1-3.59-4.785 9.978 9.978 0 0 0 6.085-3.713l.206-.276zm13.046-.726c.063.453.095.915.095 1.384a9.964 9.964 0 0 1-.88 4.11l-4.236-2.445a7.985 7.985 0 0 1 4.866-3.021l.155-.028zM2.881 7.891l4.235 2.445a7.99 7.99 0 0 1-5.021 3.05A10.14 10.14 0 0 1 2 12a9.98 9.98 0 0 1 .88-4.11zm14.961-4.008a10.026 10.026 0 0 1 3.59 4.785 9.985 9.985 0 0 0-6.086 3.715l-.205.276-1.775-1.025 4.476-7.75zM12 2a9.98 9.98 0 0 1 4.11.88l-4.476 7.754L9.859 9.61a9.98 9.98 0 0 0 .311-7.442A9.922 9.922 0 0 1 12 2zm-3.753.73a7.992 7.992 0 0 1-.01 5.57l-.12.303-4.234-2.445a10.036 10.036 0 0 1 4.164-3.346l.2-.083z" />
    </svg>
  );
};

BasketballFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BasketballFillIcon = withWrapper(BasketballFillIconComponent);
export default BasketballFillIcon;
