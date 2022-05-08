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
const FullScreenPlayIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 40H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6"
      />
      <rect
        width={20}
        height={16}
        x={24}
        y={24}
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
    </svg>
  );
};

FullScreenPlayIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FullScreenPlayIcon = withWrapper(FullScreenPlayIconComponent);
export default FullScreenPlayIcon;
