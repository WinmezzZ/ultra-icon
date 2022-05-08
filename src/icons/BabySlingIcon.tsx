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
const BabySlingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={24} cy={10} r={5} fill="null" stroke="#000" strokeWidth={4} />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 21C14 21 11 6 11 6L6 8l3 16.5c1.167.667 5.5 3 8 6.5s2 7 7.5 7 6-4.5 7.5-7 5.667-6 7-6.5L42 8l-5-2s-3 15-13 15Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 29s7 4 7 13h-5c0-6-5-9-5-9m-16-4s-7 4-7 13h5c0-6 5-9 5-9"
      />
    </svg>
  );
};

BabySlingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BabySlingIcon = withWrapper(BabySlingIconComponent);
export default BabySlingIcon;
