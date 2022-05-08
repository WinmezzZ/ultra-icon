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
const TicketsCheckedIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 30v-1.011A2.989 2.989 0 0 1 36.989 26v0a2.989 2.989 0 0 1 2.989 2.985l.012 8.2A6.805 6.805 0 0 1 33.185 44h-7.538a13.929 13.929 0 0 1-11.192-5.637l-4.265-5.757a2.992 2.992 0 0 1-.162-3.32v0a2.992 2.992 0 0 1 4.682-.576L16 30V16a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v11.875-6.849A3.026 3.026 0 0 1 25.026 18v0a3.026 3.026 0 0 1 3.027 3.026V29v-1.101a2.974 2.974 0 0 1 2.973-2.974v0A2.974 2.974 0 0 1 34 27.899V30Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M32 4v8" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 20H6v-4c2 0 4-1.5 3.974-4C9.948 9.5 8 8 6 8V4h36v4c-2 0-3.948 1.5-3.974 4C38 14.5 40 16 42 16v4H28"
      />
    </svg>
  );
};

TicketsCheckedIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TicketsCheckedIcon = withWrapper(TicketsCheckedIconComponent);
export default TicketsCheckedIcon;
