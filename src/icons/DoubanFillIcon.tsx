/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DoubanFillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M16.314 19.138h4.065a.62.62 0 0 1 .621.62v.621a.62.62 0 0 1-.62.621H3.62a.62.62 0 0 1-.62-.62v-.621a.62.62 0 0 1 .62-.621h3.754l-.96-3.104h2.19a.62.62 0 0 1 .59.425l.892 2.679H13.6l1.225-4.035H5.172a.62.62 0 0 1-.62-.62V7.345a.62.62 0 0 1 .62-.62h13.656a.62.62 0 0 1 .62.62v7.138a.62.62 0 0 1-.62.62h-1.289l-1.225 4.035zM3.931 3h16.138a.62.62 0 0 1 .62.62v.621a.62.62 0 0 1-.62.621H3.931a.62.62 0 0 1-.62-.62V3.62A.62.62 0 0 1 3.93 3zM7.19 8.586a.155.155 0 0 0-.156.155v4.035c0 .086.07.155.156.155h9.62c.086 0 .156-.07.156-.155V8.74a.155.155 0 0 0-.156-.155H7.19z" />
    </svg>
  );
};

DoubanFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DoubanFillIcon = withWrapper(DoubanFillIconComponent);
export default DoubanFillIcon;
