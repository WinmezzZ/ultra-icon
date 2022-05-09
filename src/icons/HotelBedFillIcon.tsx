/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HotelBedFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4zM8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

HotelBedFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HotelBedFillIcon = withWrapper(HotelBedFillIconComponent);
export default HotelBedFillIcon;
