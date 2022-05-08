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
const ShoppingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" d="M39 32H13L8 12h36l-5 20Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M3 6h3.5L8 12m0 0 5 20h26l5-20H8Z"
      />
      <circle cx={13} cy={39} r={3} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle cx={39} cy={39} r={3} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
};

ShoppingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShoppingIcon = withWrapper(ShoppingIconComponent);
export default ShoppingIcon;
