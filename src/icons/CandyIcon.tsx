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
const CandyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle
        cx={24}
        cy={24}
        r={10}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M24 28a4 4 0 0 1-4-4" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m16.688 16.813-12.78-1.846L14.842 4.033l1.845 12.78Zm14.625 14.5 12.779 1.845-10.934 10.934-1.846-12.78Z"
      />
    </svg>
  );
};

CandyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CandyIcon = withWrapper(CandyIconComponent);
export default CandyIcon;
