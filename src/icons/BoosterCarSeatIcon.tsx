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
const BoosterCarSeatIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 15H16c0 3.47-5.78 7.903-9.317 10.291C5.123 26.345 4 27 4 27s1 3 3.5 8c1.894 3.788 4.075 5.854 5.02 6.633.306.25.69.367 1.085.367h21.693c.455 0 .894-.154 1.217-.474.86-.852 2.672-2.9 4.485-6.526 2.5-5 3-8 3-8s-1.278-.639-3-1.709c-3.554-2.207-9-6.25-9-10.291Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m32 15 2-9h8m-26 9-2-9H6" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 27s2 4 8 4h24c5 0 8-4 8-4"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7.5 35C5 30 4 27 4 27s1.124-.655 2.683-1.709M41 35c2.5-5 3-8 3-8s-1.278-.639-3-1.709"
      />
    </svg>
  );
};

BoosterCarSeatIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BoosterCarSeatIcon = withWrapper(BoosterCarSeatIconComponent);
export default BoosterCarSeatIcon;
