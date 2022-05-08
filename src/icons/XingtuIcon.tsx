/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const XingtuIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="#000"
        d="M15.556 39 8.178 11.017a.458.458 0 0 1 .314-.561.384.384 0 0 1 .373.062l33.609 27.671a.472.472 0 0 1 .064.623.344.344 0 0 1-.312.188h-26.67ZM44.98 9.581a.458.458 0 0 0-.508-.575.419.419 0 0 0-.18.076l-18.117 12.49 12.995 10.68L44.98 9.58ZM2.188 38.189a.483.483 0 0 0-.124.623.441.441 0 0 0 .374.188h10.621l-1.812-7.058-9.06 6.247Z"
      />
    </svg>
  );
};

XingtuIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const XingtuIcon = withWrapper(XingtuIconComponent);
export default XingtuIcon;
