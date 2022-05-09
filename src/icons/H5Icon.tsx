/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const H5IconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M22 8v2h-4.323l-.464 2.636A3.999 3.999 0 0 1 22.25 16.5a4.001 4.001 0 0 1-7.846 1.103l1.923-.551a2.002 2.002 0 0 0 3.923-.552 2 2 0 0 0-3.56-1.252l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
    </svg>
  );
};

H5IconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const H5Icon = withWrapper(H5IconComponent);
export default H5Icon;
