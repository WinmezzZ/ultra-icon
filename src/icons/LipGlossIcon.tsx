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
const LipGlossIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 12H8s0 4 1 14 3 18 3 18h8s2-8 3-18 1-14 1-14Zm18 22H28s0 2 1 5 2.5 5 2.5 5h7s1.5-2 2.5-5 1-5 1-5Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M35 34V13" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M31 7h8l-2 6h-4l-2-6ZM11 6h10v6H11z"
      />
    </svg>
  );
};

LipGlossIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LipGlossIcon = withWrapper(LipGlossIconComponent);
export default LipGlossIcon;
