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
const ScissorsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={38}
        height={38}
        x={5}
        y={5}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={3}
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 19c2 3 2 7 0 10m17-15L21 24l15 10"
      />
      <circle cx={16} cy={16} r={4} stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle cx={16} cy={32} r={4} stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
};

ScissorsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ScissorsIcon = withWrapper(ScissorsIconComponent);
export default ScissorsIcon;
