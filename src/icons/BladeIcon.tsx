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
const BladeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 14v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2v3a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-3h3a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-3v-3a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 24h24" />
      <circle cx={24} cy={24} r={4} fill="#fff" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 29V19M16 29V19" />
    </svg>
  );
};

BladeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BladeIcon = withWrapper(BladeIconComponent);
export default BladeIcon;
