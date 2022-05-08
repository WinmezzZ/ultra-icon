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
const CheckInIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m16 21 6.13-14.012a2 2 0 0 1 2.78-.96L36 12"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 31V12h16v29H26v-4" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 44c9 0 9.77-5.317 12.33-5.688 3.023-.437 6.102-.662 8.773-1.312a51.55 51.55 0 0 0 7.26-2.355 1.68 1.68 0 0 0 .855-.769c.563-1.081 1.572-3.466-.297-3.767-2.428-.39-9.94 2.474-13.793 1.953-3.853-.52-2.499-3.124-1.285-3.906C21.14 26.035 25 27 25 27v-9S10.334 21.75 5 28.156M32 21h10"
      />
    </svg>
  );
};

CheckInIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CheckInIcon = withWrapper(CheckInIconComponent);
export default CheckInIcon;
