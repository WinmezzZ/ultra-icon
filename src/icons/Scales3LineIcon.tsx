/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Scales3LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A5.986 5.986 0 0 1 18 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.982 5.982 0 0 1 6 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103-1.958 5.386A3.975 3.975 0 0 0 18 15c.7 0 1.37-.18 1.958-.51L18 9.102zm-12 0-1.958 5.386A3.975 3.975 0 0 0 6 15c.7 0 1.37-.18 1.958-.51L6 9.102z" />
    </svg>
  );
};

Scales3LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Scales3LineIcon = withWrapper(Scales3LineIconComponent);
export default Scales3LineIcon;
