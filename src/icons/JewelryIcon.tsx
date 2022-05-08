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
const JewelryIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={24} cy={24} r={20} fill="null" stroke="#000" strokeWidth={4} />
      <path
        fill="null"
        stroke="#333"
        strokeWidth={4}
        d="M20 24c0-6.364 2.628-8.646 4-9 1.22.177 4 2.212 4 9s-2.78 9-4 9c-1.372-.177-4-2.636-4-9Z"
      />
      <path
        stroke="#333"
        strokeWidth={4}
        d="M20 23c-1.554-1.538-6.382-1.16-8-1-.485 1.762.352 5.492 2.293 7.414C16.72 31.817 18.661 33 24 33m4-10c1.436-1.533 5.504-1.16 7-1 .3 1.597.14 5.188-2.372 7.87C30.115 32.555 25.5 33 24 33"
      />
    </svg>
  );
};

JewelryIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const JewelryIcon = withWrapper(JewelryIconComponent);
export default JewelryIcon;
