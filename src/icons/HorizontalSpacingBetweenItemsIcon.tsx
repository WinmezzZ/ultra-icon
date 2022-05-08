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
const HorizontalSpacingBetweenItemsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 40h6V8H6" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 34V14" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M42 40h-6V8h6" />
    </svg>
  );
};

HorizontalSpacingBetweenItemsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HorizontalSpacingBetweenItemsIcon = withWrapper(HorizontalSpacingBetweenItemsIconComponent);
export default HorizontalSpacingBetweenItemsIcon;
