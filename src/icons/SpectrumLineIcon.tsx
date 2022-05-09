/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SpectrumLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m11.388 2.001 1.811.005.844.014c7.161.164 7.938 1.512 7.957 9.667l-.006 1.512-.014.844c-.164 7.161-1.512 7.938-9.667 7.957l-1.512-.006-.888-.015c-6.853-.163-7.827-1.428-7.907-8.78L2 11.691l.006-.89.014-.865c.165-7.053 1.487-7.897 9.368-7.935zM14.12 4.01 10.882 4l-1.322.01c-5.489.082-5.544.82-5.559 7.403l.001 2.175.01 1.04c.089 4.982.793 5.343 6.4 5.369l3.454-.002.776-.009c5.108-.091 5.347-.837 5.358-6.877l-.003-2.743-.012-1.055c-.094-4.796-.785-5.25-5.865-5.303zM8.25 7A8.75 8.75 0 0 1 17 15.75v.583a.667.667 0 0 1-.667.667h-3.666a.667.667 0 0 1-.667-.667v-.583A3.75 3.75 0 0 0 8.25 12h-.583A.667.667 0 0 1 7 11.333V7.667C7 7.299 7.299 7 7.667 7h.583z" />
    </svg>
  );
};

SpectrumLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpectrumLineIcon = withWrapper(SpectrumLineIconComponent);
export default SpectrumLineIcon;
