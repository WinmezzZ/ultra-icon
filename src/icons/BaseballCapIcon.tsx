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
const BaseballCapIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 30c0-8.837 7.163-16 16-16v0c8.837 0 16 7.163 16 16v6H12v-6Z"
      />
      <path stroke="#000" strokeWidth={4} d="M22 36c-1-3.5-1-22 6-22s6.5 18 6 22" />
      <rect
        width={30}
        height={6}
        x={4}
        y={36}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={3}
      />
      <circle cx={28} cy={10} r={4} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

BaseballCapIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BaseballCapIcon = withWrapper(BaseballCapIconComponent);
export default BaseballCapIcon;
