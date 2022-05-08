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
const VienchartsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <circle cx={24} cy={17} r={12} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle cx={16} cy={31} r={12} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle cx={32} cy={31} r={12} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
};

VienchartsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VienchartsIcon = withWrapper(VienchartsIconComponent);
export default VienchartsIcon;
