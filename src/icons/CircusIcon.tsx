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
const CircusIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9 26s-.076.787-1 5c-.98 4.465-4 13-4 13h40s-3.02-8.535-4-13c-.924-4.213-1-5-1-5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 28c1 9-4 16-4 16m12-16c-1 9 4 16 4 16"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 18s7.592-.055 11-1c2.866-.795 7-3 7-3s3.823 2.194 6.5 3c3.572 1.075 11.5 1 11.5 1l-1 7s-4 2-5 2-3-2-4-2-3.5 3-4 3-3-3-4-3-3 3.5-4 3.5-3-3.5-4-3.5c-.198 0-.474.078-.79.204-2.142.852-4.489 1.284-6.629.428L7 25l-1-7Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 5v10" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 11V5s-1.5 3-6 0-6 0-6 0v6s1.5-3 6 0 6 0 6 0Z"
      />
    </svg>
  );
};

CircusIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CircusIcon = withWrapper(CircusIconComponent);
export default CircusIcon;
