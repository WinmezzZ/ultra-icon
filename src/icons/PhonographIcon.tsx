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
const PhonographIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={36} height={36} x={6} y={6} stroke="#000" strokeWidth={4} rx={3} />
      <circle cx={24} cy={25} r={11} fill="null" stroke="#000" strokeWidth={4} />
      <rect width={4} height={4} x={22} y={23} fill="#fff" rx={2} />
      <rect width={4} height={4} x={34} y={34} fill="#000" rx={2} />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m28 20 8-8" />
    </svg>
  );
};

PhonographIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PhonographIcon = withWrapper(PhonographIconComponent);
export default PhonographIcon;
