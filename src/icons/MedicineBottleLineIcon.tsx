/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const MedicineBottleLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M19 2v2h-2v3a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V4H5V2h14zm-2 7H7a1 1 0 0 0-1 1v10h12V10a1 1 0 0 0-1-1zm-4 2v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v3h6V4z" />
    </svg>
  );
};

MedicineBottleLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MedicineBottleLineIcon = withWrapper(MedicineBottleLineIconComponent);
export default MedicineBottleLineIcon;
