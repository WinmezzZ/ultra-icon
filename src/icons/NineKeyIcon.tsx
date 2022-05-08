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
const NineKeyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={36}
        height={36}
        x={6}
        y={6}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={3}
      />
      <path stroke="#333" strokeWidth={4} d="M24.5 14a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 29c.818 2.193 2.548 4 5.5 4 3.038 0 5.5-2.686 5.5-6v-7"
      />
    </svg>
  );
};

NineKeyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const NineKeyIcon = withWrapper(NineKeyIconComponent);
export default NineKeyIcon;
