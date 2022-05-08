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
const CategoryManagementIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={36} height={14} x={6} y={28} stroke="#000" strokeWidth={4} rx={4} />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M20 7H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10" />
      <circle cx={34} cy={14} r={8} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={34} cy={14} r={3} fill="#fff" />
    </svg>
  );
};

CategoryManagementIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CategoryManagementIcon = withWrapper(CategoryManagementIconComponent);
export default CategoryManagementIcon;
