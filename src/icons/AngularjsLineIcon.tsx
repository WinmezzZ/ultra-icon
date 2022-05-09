/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AngularjsLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m17.523 16.65.49-.27 1.118-9.71L12 4.123 4.869 6.669l1.119 9.71.473.263L12 4.21l5.523 12.44zm-1.099.61h-.798l-1.169-2.92H9.523l-1.17 2.92h-.777L12 19.713l4.424-2.453zM12 2l9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm1.698 10.54L12 8.45l-1.698 4.09h3.396z" />
    </svg>
  );
};

AngularjsLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AngularjsLineIcon = withWrapper(AngularjsLineIconComponent);
export default AngularjsLineIcon;
