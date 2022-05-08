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
const RiceIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeWidth={4} d="M24 38c9.389 0 17-7.059 17-17H7c0 9.941 7.611 17 17 17Z" />
      <path stroke="#000" strokeWidth={4} d="M30 21c0-5.523-4.253-10-9.5-10S11 15.477 11 21" />
      <path stroke="#000" strokeWidth={4} d="M39 21c0-3.314-2.766-6-6.178-6-1.443 0-2.77.48-3.822 1.286" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m33 15 3-10m2 13 4-7" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m18 37-2 6h16l-2-6" />
    </svg>
  );
};

RiceIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RiceIcon = withWrapper(RiceIconComponent);
export default RiceIcon;
