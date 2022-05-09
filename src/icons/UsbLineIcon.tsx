/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const UsbLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m12 1 3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553a3 3 0 1 1-2.31.129L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9l3-5zm0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
};

UsbLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const UsbLineIcon = withWrapper(UsbLineIconComponent);
export default UsbLineIcon;
