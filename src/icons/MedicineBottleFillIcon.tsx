/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const MedicineBottleFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M17 5v2a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V5h10zm-4 6h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2v-2zm6-9v2H5V2h14z" />
    </svg>
  );
};

MedicineBottleFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MedicineBottleFillIcon = withWrapper(MedicineBottleFillIconComponent);
export default MedicineBottleFillIcon;
