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
const TicketOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 8h7s1 5 6 5 6-5 6-5h21v32H23s-1-5-6-5-6 5-6 5H4V8Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M17 19v2m0 6v2m8-8h11m-11 6h11" />
    </svg>
  );
};

TicketOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TicketOneIcon = withWrapper(TicketOneIconComponent);
export default TicketOneIcon;
