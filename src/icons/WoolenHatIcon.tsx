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
const WoolenHatIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={40}
        height={10}
        x={4}
        y={34}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 26v8m9-8v8m9-8v8" />
      <circle cx={24} cy={8} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <path stroke="#000" strokeWidth={4} d="M8 34c0-8.25 1-22 16-22s16 13.75 16 22" />
    </svg>
  );
};

WoolenHatIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WoolenHatIcon = withWrapper(WoolenHatIconComponent);
export default WoolenHatIcon;
