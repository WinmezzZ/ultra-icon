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
const PowerSupplyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32.297 6H15.704a1 1 0 0 0-.942.662l-6.67 18.581a1 1 0 0 0-.04.525l1.793 9.42a1 1 0 0 0 .982.812h26.346a1 1 0 0 0 .982-.813l1.794-9.419a1 1 0 0 0-.041-.525l-6.67-18.58A1 1 0 0 0 32.297 6Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 36v8" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 12v6m-7.5 5.402 3 5.196m12-5.196-3 5.196"
      />
    </svg>
  );
};

PowerSupplyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PowerSupplyIcon = withWrapper(PowerSupplyIconComponent);
export default PowerSupplyIcon;
