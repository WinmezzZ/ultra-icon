/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FloodFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M16 17.472A5.978 5.978 0 0 0 20 19h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.96 7.96 0 0 1 12 21a7.963 7.963 0 0 1-4-1.07A7.96 7.96 0 0 1 4 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.978 5.978 0 0 0 12 19c1.537 0 2.94-.578 4-1.528zm-3.427-15.94.1.08L23 11h-3v6a4.992 4.992 0 0 1-4-2 4.99 4.99 0 0 1-4 2 4.992 4.992 0 0 1-4-2 4.99 4.99 0 0 1-4 2l-.001-6H1l10.327-9.388a1 1 0 0 1 1.14-.145l.106.065z" />
    </svg>
  );
};

FloodFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FloodFillIcon = withWrapper(FloodFillIconComponent);
export default FloodFillIcon;
