/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const StackshareLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M9.536 13H7.329a3 3 0 1 1 .001-2h2.206L13 5h3.17a3 3 0 1 1 .001 2h-2.017l-2.886 4.999L14.155 17h2.016a3 3 0 1 1 0 2H13l-3.464-6zM19 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM19 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
};

StackshareLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const StackshareLineIcon = withWrapper(StackshareLineIconComponent);
export default StackshareLineIcon;
