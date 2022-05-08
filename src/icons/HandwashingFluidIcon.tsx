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
const HandwashingFluidIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 4v7m5 6v-6H19v6M31 4H19.8C17.142 4 15 5.2 15 8m23 18.977V26a9 9 0 0 0-9-9H19a9 9 0 0 0-9 9v9a9 9 0 0 0 9 9h5"
      />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M40 39.77c0 2.336-2.015 4.23-4.5 4.23S31 42.106 31 39.77c0-2.337 2.94-6.77 4.5-6.77s4.5 4.433 4.5 6.77Z"
      />
    </svg>
  );
};

HandwashingFluidIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandwashingFluidIcon = withWrapper(HandwashingFluidIconComponent);
export default HandwashingFluidIcon;
