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
const BrdigeThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 12v26m32-26v26" />
      <path stroke="#000" strokeWidth={4} d="M8 38s8-11 16-11 16 11 16 11" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 27h40M4 19h40" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 15v12m-8-8v8m16-8v8" />
    </svg>
  );
};

BrdigeThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BrdigeThreeIcon = withWrapper(BrdigeThreeIconComponent);
export default BrdigeThreeIcon;
