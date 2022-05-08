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
const CalculatorIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 4H8a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
      />
      <path fill="null" stroke="#333" strokeLinejoin="round" strokeWidth={4} d="M35 10H13v9h22v-9Z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m12 28 7 7m0-7-7 7m16 0h8m-8-6h8"
      />
    </svg>
  );
};

CalculatorIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CalculatorIcon = withWrapper(CalculatorIconComponent);
export default CalculatorIcon;
