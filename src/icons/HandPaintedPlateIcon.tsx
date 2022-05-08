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
const HandPaintedPlateIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeWidth={4} d="M18 10h24a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H18" />
      <path fill="null" stroke="#000" strokeWidth={4} d="M4 12a2 2 0 0 1 2-2h12v30H6a2 2 0 0 1-2-2V12Z" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M11 17v4" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M37 16 25 33" />
      <rect width={4} height={4} x={9} y={25} fill="#fff" rx={2} />
      <rect width={4} height={4} x={9} y={31} fill="#fff" rx={2} />
    </svg>
  );
};

HandPaintedPlateIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandPaintedPlateIcon = withWrapper(HandPaintedPlateIconComponent);
export default HandPaintedPlateIcon;
