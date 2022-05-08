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
const IntersectionIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M31 31h9a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2v9"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17 17H8a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h21a2 2 0 0 0 2-2v-9"
      />
      <rect
        width={14}
        height={14}
        x={17}
        y={17}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
    </svg>
  );
};

IntersectionIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IntersectionIcon = withWrapper(IntersectionIconComponent);
export default IntersectionIcon;
