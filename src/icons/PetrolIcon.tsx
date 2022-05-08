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
const PetrolIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M42 42V6h-3l-9 10H12l-6 6v20h36Z" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 16 22 6h18" />
      <path
        fill="null"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.643 28.889c1.431-1.88 2.535-4.479 3.131-5.889 1.044 1.41 3.31 4.948 4.026 6.829.894 2.35-1.342 5.171-4.026 5.171-2.684 0-4.92-3.76-3.131-6.111Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m11 8-7 7" />
    </svg>
  );
};

PetrolIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PetrolIcon = withWrapper(PetrolIconComponent);
export default PetrolIcon;
