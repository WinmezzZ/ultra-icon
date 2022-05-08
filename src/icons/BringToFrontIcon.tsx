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
const BringToFrontIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M41 18H19a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9.97 6H6v4.034M9.997 30H6v-3.988M26.002 6H30v4.015M16.028 6h3.98M6 16v4m24-4v2.007"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M15.993 30H18" />
    </svg>
  );
};

BringToFrontIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BringToFrontIcon = withWrapper(BringToFrontIconComponent);
export default BringToFrontIcon;
