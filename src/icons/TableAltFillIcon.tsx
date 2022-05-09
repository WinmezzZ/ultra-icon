/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const TableAltFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M7 14V3H3a1 1 0 0 0-1 1v10h5zm8 0V3H9v11h6zm7 0V4a1 1 0 0 0-1-1h-4v11h5zm-1 7a1 1 0 0 0 1-1v-4H2v4a1 1 0 0 0 1 1h18z" />
    </svg>
  );
};

TableAltFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TableAltFillIcon = withWrapper(TableAltFillIconComponent);
export default TableAltFillIcon;
