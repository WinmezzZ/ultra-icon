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
const ClothesWindbreakerIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M11 37H4V18l6.125-5L17 18l7-8 7 8 6.875-5L44 18v19h-7"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M37 25v19H11V25" />
      <path fill="null" d="m17 18 7-8 7 8 11-8-2.5-6H9l-3 6 11 8Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 10h5m5 0h-5m0 0-7 8-11-8 3-6h30.5l2.5 6-11 8-7-8Z"
      />
    </svg>
  );
};

ClothesWindbreakerIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClothesWindbreakerIcon = withWrapper(ClothesWindbreakerIconComponent);
export default ClothesWindbreakerIcon;
