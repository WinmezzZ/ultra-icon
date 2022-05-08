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
const ChimneyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40M13 14h22" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M16 14h16l4 30H12l4-30Z" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M15 24h18M13 34h22" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="m32 14 4 30M16 14l-4 30" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m24 8 .828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4"
      />
    </svg>
  );
};

ChimneyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChimneyIcon = withWrapper(ChimneyIconComponent);
export default ChimneyIcon;
