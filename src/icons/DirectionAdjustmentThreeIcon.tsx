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
const DirectionAdjustmentThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m18 10 6-6m0 0 6 6m-6-6v20m0 0v20m0-20h20m-20 0H4m14 14 6 6m0 0 6-6m8-20 6 6m0 0-6 6M10 18l-6 6m0 0 6 6"
      />
    </svg>
  );
};

DirectionAdjustmentThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DirectionAdjustmentThreeIcon = withWrapper(DirectionAdjustmentThreeIconComponent);
export default DirectionAdjustmentThreeIcon;
