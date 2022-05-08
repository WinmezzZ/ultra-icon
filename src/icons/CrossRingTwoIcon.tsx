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
const CrossRingTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19.454 26.444C17.636 28.222 15.819 30 12.182 30 8.545 30 4 27.333 4 22s4.545-8 8.182-8c5.454 0 8.182 3.556 11.818 8 3.636 4.444 6.364 8 11.818 8C39.455 30 44 27.333 44 22s-4.545-8-8.182-8c-3.636 0-6.363 2.667-7.272 3.556"
      />
    </svg>
  );
};

CrossRingTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CrossRingTwoIcon = withWrapper(CrossRingTwoIconComponent);
export default CrossRingTwoIcon;
