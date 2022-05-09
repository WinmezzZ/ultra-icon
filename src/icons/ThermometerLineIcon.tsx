/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const ThermometerLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.556 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a3.999 3.999 0 0 1-2.387 1.147l-3.378.374-2.298 2.3a1 1 0 0 1-1.414-1.415l2.298-2.299.375-3.377c.1-.903.505-1.745 1.147-2.387l8.2-8.2a4 4 0 0 1 5.657 0zm-4.242 1.414-8.2 8.2a1.995 1.995 0 0 0-.574 1.193l-.276 2.485 2.485-.276c.45-.05.872-.252 1.193-.573l.422-.423L9.95 14.05l1.414-1.414 1.414 1.414 1.414-1.414-1.414-1.414 1.414-1.414 1.415 1.414 1.414-1.415-1.414-1.414L17.02 6.98l1.414 1.414.707-.707a2 2 0 1 0-2.828-2.828z" />
    </svg>
  );
};

ThermometerLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ThermometerLineIcon = withWrapper(ThermometerLineIconComponent);
export default ThermometerLineIcon;
