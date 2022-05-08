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
const CakeFiveIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9 27h30l-4.688 17H13.689L9 27Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M39 27H9c0-5.5 5.5-8 5.5-8 0-2 2-8 9.5-8s9.5 6 9.5 8c0 0 5.5 2.5 5.5 8Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 27h36" />
      <path stroke="#000" strokeWidth={4} d="M28 12a4 4 0 0 0-8 0" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m24 8 4-4" />
      <path stroke="#000" strokeWidth={4} d="M20 27v17m8-17v17" />
    </svg>
  );
};

CakeFiveIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CakeFiveIcon = withWrapper(CakeFiveIconComponent);
export default CakeFiveIcon;
