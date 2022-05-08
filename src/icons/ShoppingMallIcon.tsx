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
const ShoppingMallIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" fillRule="evenodd" d="M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38" clipRule="evenodd" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38m0-29 10 6v23"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 44h40" />
    </svg>
  );
};

ShoppingMallIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShoppingMallIcon = withWrapper(ShoppingMallIconComponent);
export default ShoppingMallIcon;
