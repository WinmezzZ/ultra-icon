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
const NuclearPlantIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40M12 14h24" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 14h20l.877 7.017c.082.654.228 1.298.436 1.922l3.334 10.003a10 10 0 0 1 .464 2.167L40 44H8l.889-8.89a10 10 0 0 1 .464-2.168l3.334-10.003c.208-.624.354-1.268.436-1.922L14 14Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m24 8 .828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={4}
        d="M17 31a7.012 7.012 0 0 0 4.272 6.448M31 31a7.013 7.013 0 0 1-4.272 6.448M18.933 26.17A6.98 6.98 0 0 1 24 24a6.98 6.98 0 0 1 5.067 2.17"
      />
      <circle cx={24} cy={31} r={2} fill="#fff" />
    </svg>
  );
};

NuclearPlantIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const NuclearPlantIcon = withWrapper(NuclearPlantIconComponent);
export default NuclearPlantIcon;
