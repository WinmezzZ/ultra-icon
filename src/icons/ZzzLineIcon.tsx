/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ZzzLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2h8zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3h8z" />
    </svg>
  );
};

ZzzLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ZzzLineIcon = withWrapper(ZzzLineIconComponent);
export default ZzzLineIcon;
