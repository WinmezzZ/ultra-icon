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
const ClockwiseLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m20 10.586 1.828-1.829 1.415 1.415L19 14.414l-4.243-4.242 1.415-1.415L18 10.586V8a3 3 0 0 0-3-3h-4V3h4a5 5 0 0 1 5 5v2.586zM13 9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10zm-1 2H4v8h8v-8z" />
    </svg>
  );
};

ClockwiseLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClockwiseLineIcon = withWrapper(ClockwiseLineIconComponent);
export default ClockwiseLineIcon;
