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
const STurnRightIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 24H13c-4 0-7-3-7-7s3-7 7-7h19M8 38h27c4 0 7-3 7-7s-3-7-7-7h-5"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m13 43-5-5 5-5" />
      <circle cx={37.176} cy={10} r={5} fill="null" stroke="#000" strokeWidth={4} transform="rotate(-180 37.176 10)" />
    </svg>
  );
};

STurnRightIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const STurnRightIcon = withWrapper(STurnRightIconComponent);
export default STurnRightIcon;
