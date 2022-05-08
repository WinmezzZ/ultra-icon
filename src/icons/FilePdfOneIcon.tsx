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
const FilePdfOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 38v6h28v-6m0-18v-6L30 4H10v16"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 4v10h10" />
      <rect width={40} height={18} x={4} y={20} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={2} />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M21 25v8m-11-8v8" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 33v-8h5m-5 5h5m-27-5h3.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H10m11-5h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M16 12h4" />
    </svg>
  );
};

FilePdfOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FilePdfOneIcon = withWrapper(FilePdfOneIconComponent);
export default FilePdfOneIcon;
