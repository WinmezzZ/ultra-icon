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
const BabyAppIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M43 26v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h9"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 40h40" />
      <circle cx={30} cy={17} r={9} fill="null" stroke="#000" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 18v-2m22 2v-2M30 8c-.167-1-1.2-3.2-4-4m4 4c.083-1 .6-3.2 2-4"
      />
      <circle cx={33} cy={16} r={2} fill="#fff" />
      <circle cx={27} cy={16} r={2} fill="#fff" />
    </svg>
  );
};

BabyAppIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BabyAppIcon = withWrapper(BabyAppIconComponent);
export default BabyAppIcon;
