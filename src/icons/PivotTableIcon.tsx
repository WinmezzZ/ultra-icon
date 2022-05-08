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
const PivotTableIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M42 4H6a2 2 0 0 0-2 2l.001 36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20.009 34.008H33.5v-14" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24.5 38.5 23 37l-3-3 3-3 1.5-1.5m4.5-5 1.5-1.5 3-3 3 3 1.5 1.5"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M14 4v40M4 14.038 44 14" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 4h20M8 44h20" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M44 8v10M4 8v10" />
    </svg>
  );
};

PivotTableIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PivotTableIcon = withWrapper(PivotTableIconComponent);
export default PivotTableIcon;
