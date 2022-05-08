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
const MemoryOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 28h38v14H5zM5 6h38v14H5z"
      />
      <rect width={4} height={4} x={11} y={11} fill="#fff" rx={2} />
      <rect width={4} height={4} x={11} y={33} fill="#fff" rx={2} />
      <rect width={4} height={4} x={19} y={11} fill="#fff" rx={2} />
      <rect width={4} height={4} x={19} y={33} fill="#fff" rx={2} />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M31 13h4m-4 22h4" />
    </svg>
  );
};

MemoryOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MemoryOneIcon = withWrapper(MemoryOneIconComponent);
export default MemoryOneIcon;
