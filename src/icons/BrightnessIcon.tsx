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
const BrightnessIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24.02 35.353c6.076 0 11-4.924 11-11 0-6.075-4.924-11-11-11-6.075 0-11 4.925-11 11 0 6.076 4.925 11 11 11Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="m38.96 9.01-2.46 2.474M11.067 36.745l-2.046 2.059M24 41.353v3m20-20.999h-4m-2.468 12.982L40 38.804"
      />
      <path fill="#fff" fillRule="evenodd" d="M24.02 17.354a7 7 0 1 0 0 14" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 24.354h4M10.044 9.01l2.053 2.053M24 3.354v4" />
    </svg>
  );
};

BrightnessIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BrightnessIcon = withWrapper(BrightnessIconComponent);
export default BrightnessIcon;
