/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Briefcase5LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm9 10h-3v1h-2v-1H8v4h8v-4zM8 7v6h3v-1h2v1h3V7H8zm-2 6V7H4v6h2zm12 0h2V7h-2v6zM6 15H4v4h2v-4zm12 0v4h2v-4h-2zM9 3v2h6V3H9z" />
    </svg>
  );
};

Briefcase5LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Briefcase5LineIcon = withWrapper(Briefcase5LineIconComponent);
export default Briefcase5LineIcon;
