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
const HuntingGearIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M44 29H4v13h40V29Z" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M4 29 9.038 4.999H39.02l4.98 24" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M19 12a5 5 0 0 0 0 10m10 0a5 5 0 0 0 0-10m-9 5h8" />
    </svg>
  );
};

HuntingGearIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HuntingGearIcon = withWrapper(HuntingGearIconComponent);
export default HuntingGearIcon;
