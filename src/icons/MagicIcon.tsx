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
const MagicIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M30 4v6m9.9-1.9-4.243 4.243M44 18h-6m1.9 9.9-4.243-4.243M30 32v-6m-9.9 1.9 4.243-4.243M16 18h6m-1.9-9.9 4.243 4.243m5.243 6.071L5.544 42.456"
        />
      </g>
    </svg>
  );
};

MagicIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MagicIcon = withWrapper(MagicIconComponent);
export default MagicIcon;
