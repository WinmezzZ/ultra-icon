/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FilterOffLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M6.929.515 21.07 14.657l-1.414 1.414-3.823-3.822L15 13.5V22H9v-8.5L4 6H3V4h4.585l-2.07-2.071L6.929.515zM9.585 6H6.404L11 12.894V20h2v-7.106l1.392-2.087L9.585 6zM21 4v2h-1l-1.915 2.872-1.442-1.443L17.596 6h-2.383l-2-2H21z" />
    </svg>
  );
};

FilterOffLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FilterOffLineIcon = withWrapper(FilterOffLineIconComponent);
export default FilterOffLineIcon;
