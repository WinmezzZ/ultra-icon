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
const ShrimpIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.623 11H39s0 5-3 8-6 4-7 4-10.5 1-13 3-3.999 5.5 0 9 11 5 16 3 8-8 8-8l4 10s-8 3-15 4-14 0-20-6-7.001-13.5-2-20c4.166-5.416 10.414-6.666 12.382-6.933A9.202 9.202 0 0 1 20.623 11Z"
      />
      <path stroke="#000" strokeWidth={4} d="m26 23-6-12" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 4h14a7 7 0 0 1 7 7v0" />
      <circle cx={30} cy={16} r={2} fill="#fff" />
    </svg>
  );
};

ShrimpIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShrimpIcon = withWrapper(ShrimpIconComponent);
export default ShrimpIcon;
