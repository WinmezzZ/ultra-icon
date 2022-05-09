/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const GovernmentFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M2 19V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3v2h-1v11h1v2H1v-2h1zm11 0v-7h-2v7h2zm-5 0v-7H6v7h2zm10 0v-7h-2v7h2zM6 5v1h12V5H6z" />
    </svg>
  );
};

GovernmentFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GovernmentFillIcon = withWrapper(GovernmentFillIconComponent);
export default GovernmentFillIcon;
