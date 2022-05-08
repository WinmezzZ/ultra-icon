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
const ExcelOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={36} height={36} x={6} y={6} fill="null" stroke="#000" strokeWidth={4} rx={3} />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M30 16H18m0 16V16m10 8H18m12 8H18" />
    </svg>
  );
};

ExcelOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ExcelOneIcon = withWrapper(ExcelOneIconComponent);
export default ExcelOneIcon;
