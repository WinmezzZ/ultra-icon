/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const RadioLineIconComponent = (p: SVGComponentProps) => {
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
      <path d="M17 10V8h-2v2H5V6h14v4h-2zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6zM4 5v14h16V5H4zm4 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

RadioLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RadioLineIcon = withWrapper(RadioLineIconComponent);
export default RadioLineIcon;
