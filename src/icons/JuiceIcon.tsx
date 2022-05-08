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
const JuiceIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15 24h18l-1.8 20H16.8L15 24Z"
      />
      <rect width={26} height={6} x={11} y={18} stroke="#000" strokeWidth={4} rx={3} />
      <path fill="null" stroke="#000" strokeWidth={4} d="M24 8c-5.523 0-10 4.477-10 10h20c0-5.523-4.477-10-10-10Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m28 4-2 4" />
    </svg>
  );
};

JuiceIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const JuiceIcon = withWrapper(JuiceIconComponent);
export default JuiceIcon;
