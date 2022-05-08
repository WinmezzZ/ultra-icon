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
const DviIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 16a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v7.802c0 .132-.013.263-.039.392l-1.64 8.198A2 2 0 0 1 40.362 34H7.64a2 2 0 0 1-1.962-1.608l-1.64-8.198A2 2 0 0 1 4 23.802V16Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 24h6m5-3h2m-2 6h2m5-6h2m-2 6h2m5-6h2m-2 6h2"
      />
    </svg>
  );
};

DviIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DviIcon = withWrapper(DviIconComponent);
export default DviIcon;
