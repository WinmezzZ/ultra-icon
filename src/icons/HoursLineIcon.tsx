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
const HoursLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 13a3 3 0 0 1 2.08 5.162L12.17 20H15v2H9v-1.724l3.693-3.555A1 1 0 1 0 11 16H9a3 3 0 0 1 3-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zM4 12a7.985 7.985 0 0 0 3 6.246v2.416A9.995 9.995 0 0 1 2 12h2zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012A8.001 8.001 0 0 0 5.385 7.5H8v2H2v-6h2V6a9.98 9.98 0 0 1 8-4z" />
    </svg>
  );
};

HoursLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HoursLineIcon = withWrapper(HoursLineIconComponent);
export default HoursLineIcon;