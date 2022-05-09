/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const MeteorFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77L21 1zm-9 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
    </svg>
  );
};

MeteorFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MeteorFillIcon = withWrapper(MeteorFillIconComponent);
export default MeteorFillIcon;
