/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FileHwpLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm0 6.667H8V7.333h3.333V6h1.334l-.001 1.333h2.333L15 4H5v16h14V8l-3-.001v.668zm-6.667 6v1.999H16V18H8v-3.333h1.333zM12 14.333a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 1.333a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334z" />
    </svg>
  );
};

FileHwpLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FileHwpLineIcon = withWrapper(FileHwpLineIconComponent);
export default FileHwpLineIcon;
