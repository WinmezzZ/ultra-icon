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
const StrongboxIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <rect
        width={40}
        height={40}
        x={4}
        y={4}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={3}
      />
      <circle cx={12} cy={12} r={2} fill="#fff" />
      <circle cx={12} cy={36} r={2} fill="#fff" />
      <circle cx={36} cy={12} r={2} fill="#fff" />
      <circle cx={36} cy={36} r={2} fill="#fff" />
      <circle
        cx={24}
        cy={24}
        r={9}
        fill="null"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </svg>
  );
};

StrongboxIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const StrongboxIcon = withWrapper(StrongboxIconComponent);
export default StrongboxIcon;
