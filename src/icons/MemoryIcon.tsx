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
const MemoryIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M8 6v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V13.61a2 2 0 0 0-.605-1.433l-7.813-7.61A2 2 0 0 0 30.187 4H10a2 2 0 0 0-2 2Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 21H8m32 8H30m10 7H30m0 8V21M18 44V21m0 12H8"
      />
    </svg>
  );
};

MemoryIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MemoryIcon = withWrapper(MemoryIconComponent);
export default MemoryIcon;
