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
const DigitalWatchesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={22} height={22} x={13} y={13} fill="null" stroke="#000" strokeWidth={4} rx={3} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29 35v7a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-7m0-22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7m6 8h2"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 24h2m6 0h2" />
    </svg>
  );
};

DigitalWatchesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DigitalWatchesIcon = withWrapper(DigitalWatchesIconComponent);
export default DigitalWatchesIcon;
