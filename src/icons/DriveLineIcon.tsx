/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DriveLineIconComponent = (p: SVGComponentProps) => {
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
      <path d="M9.097 6.15 4.31 14.443l1.755 3.032 4.785-8.29L9.097 6.15zm-1.3 12.324h9.568l1.751-3.034H9.55l-1.752 3.034zm11.314-5.034-4.786-8.29H10.83l4.787 8.29h3.495zM8.52 3.15h6.96L22 14.444l-3.48 6.03H5.49L2 14.444 8.52 3.15zm3.485 8.036-1.302 2.254h2.603l-1.301-2.254z" />
    </svg>
  );
};

DriveLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DriveLineIcon = withWrapper(DriveLineIconComponent);
export default DriveLineIcon;
