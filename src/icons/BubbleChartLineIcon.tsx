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
const BubbleChartLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6 14a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 14zm8.5-12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 1 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
    </svg>
  );
};

BubbleChartLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BubbleChartLineIcon = withWrapper(BubbleChartLineIconComponent);
export default BubbleChartLineIcon;
