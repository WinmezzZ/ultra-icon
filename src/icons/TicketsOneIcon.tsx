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
const TicketsOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={26}
        height={38}
        x={5}
        y={42}
        fill="null"
        stroke="#000"
        strokeLinejoin="bevel"
        strokeWidth={4}
        rx={2}
        transform="rotate(-90 5 42)"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 16 32 5l5 11" />
      <circle cx={13} cy={23} r={2} fill="#fff" />
      <circle cx={13} cy={29} r={2} fill="#fff" />
      <circle cx={13} cy={35} r={2} fill="#fff" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 35h4l11-12m-12 6h6" />
    </svg>
  );
};

TicketsOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TicketsOneIcon = withWrapper(TicketsOneIconComponent);
export default TicketsOneIcon;
