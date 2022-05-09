/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Css3LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M2.8 14h2.04l-.545 2.725 5.744 2.154 7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15-9 3-8-3z" />
    </svg>
  );
};

Css3LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Css3LineIcon = withWrapper(Css3LineIconComponent);
export default Css3LineIcon;
