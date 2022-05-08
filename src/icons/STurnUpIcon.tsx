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
const STurnUpIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 31v4c0 4-3 7-7 7s-7-3-7-7V16m28 26V13c0-4-3-7-7-7s-7 3-7 7v18"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m33 37 5 5 5-5" />
      <circle cx={10} cy={11} r={5} fill="null" stroke="#000" strokeWidth={4} transform="rotate(-180 10 11)" />
    </svg>
  );
};

STurnUpIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const STurnUpIcon = withWrapper(STurnUpIconComponent);
export default STurnUpIcon;
