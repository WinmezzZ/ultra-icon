/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const BikeFillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956L5.5 12zM5 21a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm13 3a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
};

BikeFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BikeFillIcon = withWrapper(BikeFillIconComponent);
export default BikeFillIcon;
