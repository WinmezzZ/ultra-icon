/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const QrScanFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21 15v5.007a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V15h18zM2 11h20v2H2v-2zm19-2H3V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993V9z" />
    </svg>
  );
};

QrScanFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const QrScanFillIcon = withWrapper(QrScanFillIconComponent);
export default QrScanFillIcon;
