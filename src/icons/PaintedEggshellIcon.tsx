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
const PaintedEggshellIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={4}
        d="M24 44c10.252 0 16-6.955 16-18 0-11.046-8.868-22-16-22S8 14.954 8 26c0 11.045 5.748 18 16 18Z"
        clipRule="evenodd"
      />
      <path fill="#fff" d="M21 38a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path fill="#fff" fillRule="evenodd" d="M16 29.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd" />
    </svg>
  );
};

PaintedEggshellIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PaintedEggshellIcon = withWrapper(PaintedEggshellIconComponent);
export default PaintedEggshellIcon;
