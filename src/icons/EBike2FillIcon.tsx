/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const EBike2FillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M16 1a1 1 0 0 1 1 1v1h5v6h-2.019l2.746 7.545A4 4 0 1 1 15.126 19h-4.252a4.002 4.002 0 0 1-7.8-.226A2 2 0 0 1 2 17V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3h-3V1h4Zm3 15a2 2 0 1 0 1.88 1.316l-.016-.044A2 2 0 0 0 19 16ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2-8H4v2h5V8Zm11-3h-3v2h3V5Z" />
    </svg>
  );
};

EBike2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EBike2FillIcon = withWrapper(EBike2FillIconComponent);
export default EBike2FillIcon;
