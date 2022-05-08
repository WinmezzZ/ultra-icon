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
const BabyMealIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 6H10a5 5 0 0 0-5 5v26a5 5 0 0 0 5 5h20"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 6v17.524L5 28m14-4 12 4"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M37 18v24" />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M31 13.333C31 7.111 35 4 37 4s6 3.111 6 9.333c0 6.223-12 6.223-12 0Z"
      />
    </svg>
  );
};

BabyMealIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BabyMealIcon = withWrapper(BabyMealIconComponent);
export default BabyMealIcon;
