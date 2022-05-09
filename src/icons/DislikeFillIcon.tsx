/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DislikeFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m2.808 1.393 18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 0 1 .034-8.023L1.393 2.808l1.415-1.415zm17.435 3.364a6 6 0 0 1 .236 8.236l-1.635 1.636L7.26 3.046a5.986 5.986 0 0 1 4.741 1.483 5.998 5.998 0 0 1 8.242.228z" />
    </svg>
  );
};

DislikeFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DislikeFillIcon = withWrapper(DislikeFillIconComponent);
export default DislikeFillIcon;
