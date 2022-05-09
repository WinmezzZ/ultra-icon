/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ThermometerFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M20.556 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a3.999 3.999 0 0 1-2.387 1.147l-3.378.374-2.298 2.3a1 1 0 0 1-1.414-1.415l2.298-2.299.375-3.377c.1-.903.505-1.745 1.147-2.387l8.2-8.2a4 4 0 0 1 5.657 0zm-9.192 9.192L9.95 14.05l2.121 2.122 1.414-1.415-2.121-2.121zm2.828-2.828-1.414 1.414 2.121 2.121 1.415-1.414-2.122-2.121zm2.829-2.829-1.414 1.414 2.12 2.122L19.143 9.1l-2.121-2.122z" />
    </svg>
  );
};

ThermometerFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ThermometerFillIcon = withWrapper(ThermometerFillIconComponent);
export default ThermometerFillIcon;
