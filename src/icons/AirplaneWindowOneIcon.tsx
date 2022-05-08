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
const AirplaneWindowOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m30.349 32 6.506-24.282a3 3 0 0 1 3.675-2.122v0a3 3 0 0 1 2.12 3.675L36.56 32"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 32v6H13a3 3 0 1 1 0-6h23Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 44h8" />
      <rect
        width={10}
        height={20}
        x={6}
        y={4}
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={5}
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 14h10" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 9v10M16 9v10" />
    </svg>
  );
};

AirplaneWindowOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AirplaneWindowOneIcon = withWrapper(AirplaneWindowOneIconComponent);
export default AirplaneWindowOneIcon;
