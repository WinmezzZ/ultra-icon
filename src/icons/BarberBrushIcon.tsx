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
const BarberBrushIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29.796 24H16.204s-3.986 7.708 2.549 10.833c4.182 2.5-2.549 9.167-2.549 9.167h13.592s-6.73-7.292-2.548-9.167C33.782 31.708 29.796 24 29.796 24Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m37 10-7 14H16L9 10s3-6 14-6 14 6 14 6ZM25 24l2-12m-6 12-2-12"
      />
    </svg>
  );
};

BarberBrushIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BarberBrushIcon = withWrapper(BarberBrushIconComponent);
export default BarberBrushIcon;
